'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { axiosClient } from '@/lib/axios';
import { useToast } from '@/providers/ToastProvider';
import type {
  TAddContactPayload,
  TContact,
  TEditContactPayload,
  UseGetListContactOptions,
  UseGetListContactPayload,
} from '@/services/contacts/types';
import { CONTACT_QUERY_KEY } from './constants';

export const getListContacts = async (
  payload: UseGetListContactPayload = {}
): Promise<TContact[]> => {
  const { filter, sort, order } = payload;
  const { data, status } = await axiosClient.get<{ data: TContact[] }>('/contacts');
  if (status !== 200) return [];

  let result = data.data;

  if (filter) {
    const regex = new RegExp(filter, 'i');
    result = result.filter((contact) => {
      const firstNameMatch = regex.test(contact.first_name);
      const lastNameMatch = regex.test(contact.last_name);
      return firstNameMatch || lastNameMatch;
    });
  }

  if (sort) {
    result = result.sort((a, b) => {
      const valueA = a[sort];
      const valueB = b[sort];

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return order === 'asc' ? valueA - valueB : valueB - valueA;
      }

      if (typeof valueA === 'number' || typeof valueB === 'number') {
        return -1;
      }

      const comparison =
        order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      return comparison;
    });
  }

  return result;
};

export const useGetListContacts = (
  options: UseGetListContactOptions = {},
  payload: UseGetListContactPayload = {}
) => {
  const { filter = '', sort = '', order = 'asc' } = payload;
  return useQuery({
    queryKey: [CONTACT_QUERY_KEY, filter, sort, order],
    queryFn: () =>
      getListContacts({
        filter,
        sort,
        order,
      }),
    ...options,
  });
};

export const deleteContact = async (id: number) => {
  const { status } = await axiosClient.delete(`/contacts/${id}`);
  return status === 200;
};

export const useMutateDeleteContact = (id: number) => {
  const { showToast, showError } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteContact(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CONTACT_QUERY_KEY] });
      showToast({
        message: 'Successfully Delete contact',
      });
    },
    onError: (e: AxiosError<string>) => {
      if (e.response) {
        const html = e.response.data;
        if (!html) return;
        const errorElement = parseHTMLError(html);
        if (errorElement) {
          showError(errorElement);
        }
      }
    },
  });
};

export const addContact = async (payload: TAddContactPayload) => {
  const response = await axiosClient.post('/contacts', {
    contact: payload,
  });

  return response.status === 200;
};

export const useMutateAddContact = () => {
  const queryClient = useQueryClient();

  const { showToast, showError } = useToast();

  return useMutation({
    mutationFn: addContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CONTACT_QUERY_KEY] });
      showToast({
        message: 'Successfully add contact',
      });
    },
    onError: (e: AxiosError<string>) => {
      if (e.response) {
        const html = e.response.data;
        if (!html) return;
        const errorElement = parseHTMLError(html);
        if (errorElement) {
          showError(errorElement);
        }
      }
    },
  });
};

export const editContact = async (id: number, payload: TEditContactPayload) => {
  const response = await axiosClient.patch(`/contacts/${id}`, {
    info: payload,
  });

  return response.status === 200;
};

export const useMutateEditContact = (id: number) => {
  const queryClient = useQueryClient();
  const { showToast, showError } = useToast();

  return useMutation<boolean, AxiosError<string>, TEditContactPayload>({
    mutationFn: (payload) => editContact(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CONTACT_QUERY_KEY] });
      showToast({
        message: 'Successfully updated contact',
      });
    },
    onError: (e: AxiosError<string>) => {
      if (e.response) {
        const html = e.response.data;
        if (!html) return;
        const errorElement = parseHTMLError(html);
        if (errorElement) {
          showError(errorElement);
        }
      }
    },
  });
};

const parseHTMLError = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const errorElement = doc.querySelector('h1');
  return errorElement?.textContent;
};
