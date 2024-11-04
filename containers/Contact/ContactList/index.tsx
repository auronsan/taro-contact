'use client';

import { Box } from '@/components/Box';
import Grid from '@/components/Grid';
import { LoadingOverlay } from '@/components/LoadingOverlay';
import { useGetListContacts } from '@/services/contacts';
import { TContact } from '@/services/contacts/types';
import { ContactItem } from './ContactItem';

// import { ContactItem } from './ContactItem';

type TContactListProps = {
  contacts?: TContact[];
};

export const ContactList = (props: TContactListProps): React.ReactElement => {
  const { contacts: initialData } = props;
  const { data, isLoading } = useGetListContacts({
    initialData: initialData || [],
  });

  return (
    <Box>
      <LoadingOverlay visible={isLoading} />
      <Grid>
        {data?.map((contact) => (
          <Grid.Col key={contact.id}>
            <ContactItem contact={contact} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};
