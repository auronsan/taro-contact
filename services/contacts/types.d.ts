import { UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export type TContact = {
  id: number;
  first_name: string;
  last_name: string;
  job: string;
  description: string;
};

export type TAddContactPayload = {
  first_name: string;
  last_name: string;
  job: string;
  description: string;
};

export type UseGetListContactOptions = Partial<
  UseQueryOptions<TContact[], AxiosError, TContact[], string[]>
>;

export type UseGetListContactPayload = {
  filter?: string;
  sort?: keyof TContact | '';
  order?: 'asc' | 'desc';
};
