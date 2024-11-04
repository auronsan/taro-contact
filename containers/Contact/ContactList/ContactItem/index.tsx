import { IconStar } from '@tabler/icons-react';
import { Box } from '@/components/Box';
import { Button } from '@/components/Button';
import { Group } from '@/components/Group';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';
import { TContact } from '@/services/contacts/types';

export const ContactItem = (props: { contact: TContact }) => {
  const { contact } = props;

  return (
    <>
      <Group justify="space-between" wrap="nowrap">
        <Box>
          <Group wrap="nowrap">
            <Box>
              <IconStar />
            </Box>
            <Stack gap="xs">
              <Text>{contact.first_name}</Text>
              <Text>Job: {contact.job}</Text>
              <Text>Description: {contact.description}</Text>
            </Stack>
          </Group>
        </Box>
        <Box>
          <Stack gap="md">
            <Button c="yellow">Edit</Button>
            <Button c="red">Delete</Button>
          </Stack>
        </Box>
      </Group>
    </>
  );
};
