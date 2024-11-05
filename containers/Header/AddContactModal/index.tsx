'use client';

import { useForm } from '@mantine/form';
import { Button } from '@/components/Button';
import { FormInput } from '@/components/FormInput';
import { Modal } from '@/components/Modal';
import { Stack } from '@/components/Stack';
import { useMutateAddContact } from '@/services/contacts';

type TAddContactModalProps = {
  opened: boolean;
  onClose: () => void;
};

export const AddContactModal = (props: TAddContactModalProps): React.ReactElement => {
  const { opened, onClose } = props;
  const addContact = useMutateAddContact();

  const form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      job: '',
      description: '',
    },
  });

  const onAddContact = async () => {
    await addContact.mutateAsync(form.values);
    form.reset();
    onClose();
  };

  return (
    <>
      <Modal visible={opened} onClose={() => onClose()} title="Add Contact">
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
          <Button onClick={() => onAddContact()}>Add</Button>
        </Stack>
      </Modal>
    </>
  );
};
