'use client';

import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import Grid from '@/components/Grid';
import { Group } from '@/components/Group';
import { LoadingOverlay } from '@/components/LoadingOverlay';
import { Text } from '@/components/Text';
import { TextInput } from '@/components/TextInput';
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
      <Box>
        <Group justify="space-between" p={20}>
          <Text>ContactList</Text>
          <Box flex={0.8}>
            <TextInput placeholder="Search" />
          </Box>
          <Button>Add</Button>
        </Group>

        <Box>
          <Grid>
            {data?.map((contact) => (
              <Grid.Col key={contact.id}>
                <ContactItem contact={contact} />
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Box>

      {/*
      <Group justify="space-between" p={20} gap={30}>
        <Text>ContactList</Text>
        <Box flex={1}>
          <TextInput placeholder="Search" />
        </Box>
        <Button>Add</Button>
      </Group>

       */}
    </Box>
  );
};
