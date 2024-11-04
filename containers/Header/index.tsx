'use client';

import { useState } from 'react';
import { Anchor } from '@/components/Anchor';
import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import { Group } from '@/components/Group';
import { Modal } from '@/components/Modal';
import { Text } from '@/components/Text';
import { TextInput } from '@/components/TextInput';

export const Header = () => {
  const [addModal, setAddModal] = useState(false);

  return (
    <>
      <Group justify="space-between" p={20}>
        <Anchor href="/">Contact List</Anchor>
        <Box flex={0.8}>
          <TextInput placeholder="Search" />
        </Box>
        <Button onClick={() => setAddModal(true)}>Add</Button>
      </Group>
      <Modal visible={addModal} onClose={() => setAddModal(false)}>
        <Text>abc</Text>
      </Modal>
    </>
  );
};
