import { useState } from 'react';
import Image from 'next/image';
import {
  IconBriefcase,
  IconEdit,
  IconSettings,
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
import { EditContactModal } from '@/containers/Contact/EditContactModal';
import { useMutateDeleteContact } from '@/services/contacts';
import { TContact } from '@/services/contacts/types';
import { useGetFavorite, useMutateToggleFavorite } from '@/services/favorites';
import classes from './contactItem.module.css';

export const ContactItem = (props: { contact: TContact }) => {
  const { contact } = props;

  const [editModalVisible, setEditModalVisible] = useState(false);

  const currentFavorite = useGetFavorite(`${contact.id}`);
  const toggleFavorite = useMutateToggleFavorite(`${contact.id}`, {
    isFavorite: currentFavorite,
  });
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
              className={classes.image}
            />
            <Stack gap="xs">
              <Text size="lg" fw="bold">
                {contact.first_name} {contact.last_name}
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
            <Popover
              target={<IconSettings />}
              targetId={`edit-setting-contact-button-${contact.id}`}
            >
              <Stack gap="md">
                <ActionIcon
                  onClick={() => setEditModalVisible(true)}
                  id={`edit-contact-button-${contact.id}`}
                >
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
      <EditContactModal
        contact={contact}
        opened={editModalVisible}
        onClose={() => setEditModalVisible(false)}
      />
    </>
  );
};
