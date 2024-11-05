'use client';

import { useState } from 'react';
import { Anchor } from '@/components/Anchor';
import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import { Group } from '@/components/Group';
import { SearchBar } from '@/components/SearchBar';
import { ToggleColorScheme } from '@/components/ToggleColorScheme';
import { AddContactModal } from './AddContactModal';

export const Header = () => {
  const [addModal, setAddModal] = useState(false);

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
      <AddContactModal opened={addModal} onClose={() => setAddModal(false)} />
    </>
  );
};
