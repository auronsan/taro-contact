import Image from 'next/image';
import {
  IconBriefcase,
  IconEdit,
  IconSpeakerphone,
  IconStar,
  IconTrash,
} from '@tabler/icons-react';
import { ActionIcon } from '@/components/ActionIcon';
import { Box } from '@/components/Box';
import { Group } from '@/components/Group';
import { Popover } from '@/components/Popover';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';
import { useMutateDeleteContact } from '@/services/contacts';
import { TContact } from '@/services/contacts/types';
import { useGetFavorites, useMutateToggleFavorite } from '@/services/favorites';

export const ContactItem = (props: { contact: TContact }) => {
  const { contact } = props;

  const { data: currentFavorite } = useGetFavorites(`${contact.id}`);
  const toggleFavorite = useMutateToggleFavorite(`${contact.id}`);
  const deleteContact = useMutateDeleteContact(contact.id);

  return (
    <>
      <Group justify="space-between" wrap="nowrap">
        <Box>
          <Group wrap="nowrap">
            <Image
              alt={`avatar of ${contact.first_name}`}
              src="/dart.jpeg"
              width={50}
              height={50}
            />
            <Stack gap="xs">
              <Text size="lg" fw="bold">
                {contact.first_name}
              </Text>
              <Group>
                <IconBriefcase color="skyblue" />
                <Text>{contact.job}</Text>
              </Group>
              <Group>
                <IconSpeakerphone />
                <Text>{contact.description}</Text>
              </Group>
            </Stack>
          </Group>
        </Box>
        <Box>
          <Stack>
            <Box>
              <ActionIcon onClick={() => toggleFavorite.mutate()}>
                {currentFavorite ? <IconStar color="orange" fill="orange" /> : <IconStar />}
              </ActionIcon>
            </Box>
            <Popover>
              <Stack gap="md">
                <ActionIcon>
                  <Group>
                    <IconEdit />
                    Edit
                  </Group>
                </ActionIcon>

                <ActionIcon onClick={() => deleteContact.mutate()}>
                  <Group>
                    <IconTrash color="red" />
                    <Text c="red">Delete</Text>
                  </Group>
                </ActionIcon>
              </Stack>
            </Popover>
          </Stack>
        </Box>
      </Group>
    </>
  );
};
