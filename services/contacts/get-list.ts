import { useQuery } from '@tanstack/react-query';
import { axiosClient } from '@/lib/axios';
import type {
  TContact,
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
      if (typeof valueA === 'number' || typeof valueB === 'number') {
        if (typeof valueA === 'number' && typeof valueB === 'number') {
          if (order === 'asc') {
            return valueA - valueB;
          }
          return valueB - valueA;
        }
        return -1;
      }
      if (order === 'asc') {
        return valueA.localeCompare(valueB);
      }
      return valueB.localeCompare(valueA);
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
