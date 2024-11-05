'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box } from '@/components/Box';
import Grid from '@/components/Grid';
import { LoadingOverlay } from '@/components/LoadingOverlay';
import { useGetListContacts } from '@/services/contacts';
import type { TContact } from '@/services/contacts/types';
import { useGetFavorites } from '@/services/favorites';
import { ContactItem } from './ContactItem';

type TContactListProps = {
  contacts?: TContact[];
  isFavorite?: boolean;
};

export const ContactList = (props: TContactListProps): React.ReactElement => {
  const searchParams = useSearchParams();
  const queryParam = searchParams?.get('q');
  const sortParams = searchParams?.get('sort') as keyof TContact;
  const orderParams = searchParams?.get('order') as 'asc' | 'desc';

  const { contacts: initialData, isFavorite = false } = props;
  const { data, isLoading } = useGetListContacts(
    {
      initialData: initialData || [],
    },
    {
      filter: queryParam || '',
      sort: sortParams || 'id',
      order: orderParams || 'asc',
    }
  );
  const favorites = useGetFavorites();

  const filteredData = useMemo(() => {
    if (isFavorite) {
      return data?.filter((contact) => favorites?.includes(`${contact.id}`));
    }
    return data;
  }, [data, isFavorite, favorites]);

  return (
    <Box>
      <LoadingOverlay visible={isLoading} />
      <Grid>
        {filteredData &&
          filteredData?.map((contact) => (
            <Grid.Col key={contact.id}>
              <ContactItem contact={contact} />
            </Grid.Col>
          ))}
      </Grid>
    </Box>
  );
};
