'use client';

import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { IconCirclePlus } from '@tabler/icons-react';
import { Anchor } from '@/components/Anchor';
import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import { Group } from '@/components/Group';
import { HamburgerMenu } from '@/components/HamburgerMenu';
import { SearchBar } from '@/components/SearchBar';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';
import { ToggleColorScheme } from '@/components/ToggleColorScheme';
import { AddContactModal } from '@/containers/Contact/AddContactModal';

export const Header = () => {
  const [addModal, setAddModal] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Stack>
        <Group justify="space-between" p={20}>
          {isMobile && (
            <HamburgerMenu
              menu={
                <Stack px={20} gap="lg" mt={10}>
                  <ToggleColorScheme />
                  <Button onClick={() => setAddModal(true)} id="add-contact-button">
                    Add
                  </Button>
                </Stack>
              }
            />
          )}

          <Anchor href="/">Contact List</Anchor>
          {!isMobile && (
            <Box flex={0.8}>
              <SearchBar />
            </Box>
          )}
          <Box>
            {!isMobile && (
              <Group>
                <ToggleColorScheme />
                <Button onClick={() => setAddModal(true)} id="add-contact-button">
                  <Group gap="xs">
                    <Text>Add</Text>
                    <IconCirclePlus />
                  </Group>
                </Button>
              </Group>
            )}
          </Box>
        </Group>

        {isMobile && (
          <Box flex={1} px={30}>
            <SearchBar />
          </Box>
        )}
      </Stack>
      <AddContactModal opened={addModal} onClose={() => setAddModal(false)} />
    </>
  );
};
