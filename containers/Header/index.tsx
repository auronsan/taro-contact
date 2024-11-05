'use client';

import { useState } from 'react';
import { Anchor } from '@/components/Anchor';
import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import { Group } from '@/components/Group';
import { Modal } from '@/components/Modal';
import { SearchBar } from '@/components/SearchBar';
import { Text } from '@/components/Text';
import { ToggleColorScheme } from '@/components/ToggleColorScheme';
import { useMutateAddContact } from '@/services/contacts';

export const Header = () => {
  const [addModal, setAddModal] = useState(false);

  const addContact = useMutateAddContact();

  return (
    <>
      <Group justify="space-between" p={20}>
        <Anchor href="/">Contact List</Anchor>
        <Box flex={0.8}>
          <SearchBar />
        </Box>
        <Group>
          <ToggleColorScheme />
          <Button onClick={() => setAddModal(true)}>Add</Button>
        </Group>
      </Group>
      <Modal visible={addModal} onClose={() => setAddModal(false)}>
        <Text>abc</Text>
        <Button
          onClick={() =>
            addContact.mutate({
              first_name: 'abc',
              last_name: 'def',
              job: 'xyz',
              description: 'abc',
            })
          }
        >
          Add
        </Button>
      </Modal>
    </>
  );
};
