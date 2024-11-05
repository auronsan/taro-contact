'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { axiosClient } from '@/lib/axios';
import { useToast } from '@/providers/ToastProvider';
import type { TAddContactPayload, TEditContactPayload } from '@/services/contacts/types';
import { CONTACT_QUERY_KEY } from './constants';

export const deleteContact = async (id: number) => {
  const { status } = await axiosClient.delete(`/contacts/${id}`);
  return status === 200;
};

export const useMutateDeleteContact = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteContact(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CONTACT_QUERY_KEY] });
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
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const errorElement = doc.querySelector('h1');
        if (errorElement) {
          showError(errorElement.textContent);
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
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const errorElement = doc.querySelector('h1');
        if (errorElement) {
          showError(errorElement.textContent);
        }
      }
    },
  });
};
