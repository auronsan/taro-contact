'use client';

import { useForm } from '@mantine/form';
import { Button } from '@/components/Button';
import { FormInput } from '@/components/FormInput';
import { Modal } from '@/components/Modal';
import { Stack } from '@/components/Stack';
import { useMutateEditContact } from '@/services/contacts';
import { TContact } from '@/services/contacts/types';

type TAddContactModalProps = {
  opened: boolean;
  onClose: () => void;
  contact: TContact;
};

export const EditContactModal = (props: TAddContactModalProps): React.ReactElement => {
  const { opened, onClose, contact } = props;
  const editContact = useMutateEditContact(contact?.id);

  const form = useForm({
    initialValues: contact,
  });

  const onEditContact = async () => {
    await editContact.mutateAsync(form.values);
    form.reset();
    onClose();
  };

  return (
    <>
      <Modal visible={opened} onClose={() => onClose()} title="Edit Contact">
        <Stack gap="lg">
          <Stack>
            <FormInput
              form={form}
              fieldName="first_name"
              placeholder="input your first name"
              label="First Name"
            />
            <FormInput
              form={form}
              fieldName="last_name"
              placeholder="input your last name"
              label="Last Name"
            />
            <FormInput form={form} fieldName="job" placeholder="input your job" label="Job" />
            <FormInput
              form={form}
              fieldName="description"
              placeholder="input your description"
              label="Description"
            />
          </Stack>
          <Button onClick={() => onEditContact()}>Update</Button>
        </Stack>
      </Modal>
    </>
  );
};
