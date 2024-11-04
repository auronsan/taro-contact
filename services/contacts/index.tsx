import { useQuery } from '@tanstack/react-query';
import { axiosClient } from '@/lib/axios';
import type { TContact, UseGetListContactOptions } from '@/services/contacts/types';

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
