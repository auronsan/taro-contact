import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { axiosClient } from '@/lib/axios';
import type {
  TAddContactPayload,
  TContact,
  UseGetListContactOptions,
} from '@/services/contacts/types';

export const CONTACT_QUERY_KEY = 'contacts';

export const getListContacts = async (): Promise<TContact[]> => {
  const { data, status } = await axiosClient.get<{ data: TContact[] }>('/contacts');
  if (status !== 200) return [];
  return data.data;
};

export const useGetListContacts = (options: UseGetListContactOptions = {}) =>
  useQuery({
    queryKey: [CONTACT_QUERY_KEY],
    queryFn: getListContacts,
    ...options,
  });

export const deleteContact = async (id: number) => {
  const { status } = await axiosClient.delete(`/contacts/${id}`);
  return status === 200;
};

export const useMutateDeleteContact = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteContact(id),
    onSettled: () => {
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
  return useMutation({
    mutationFn: addContact,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [CONTACT_QUERY_KEY] });
    },
    onError: (e: AxiosError<string>) => {
      if (e.response) {
        const html = e.response.data;
        if (!html) return;
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const errorElement = doc.querySelector('h1');
        if (errorElement) {
          console.log(errorElement.textContent);
        }
      }
    },
  });
};
