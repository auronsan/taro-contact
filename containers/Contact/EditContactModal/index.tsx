'use client';

import { useForm } from '@mantine/form';
import { Button } from '@/components/Button';
import { FormInput } from '@/components/FormInput';
import { Modal } from '@/components/Modal';
import { Stack } from '@/components/Stack';
import { useToast } from '@/providers/ToastProvider';
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

  const { showError } = useToast();

  const form = useForm({
    initialValues: contact,
    validate: {
      first_name: (value) => (value ? null : 'First Name is required'),
      last_name: (value) => (value ? null : 'Last Name is required'),
      job: (value) => (value ? null : 'Job is required'),
      description: (value) => (value ? null : 'Description is required'),
    },
  });

  const onSubmit = () => {};

  const onEditContact = async () => {
    const validate = form.validate();
    if (validate.hasErrors) {
      showError(validate.errors);
      return;
    }
    await editContact.mutateAsync(form.values);
    form.reset();
    onClose();
  };

  return (
    <>
      <Modal visible={opened} onClose={() => onClose()} title="Edit Contact">
        <form
          id="edit-contact-form"
          data-testid="edit-contact-form"
          onSubmit={form.onSubmit(onSubmit)}
        >
          <Stack gap="lg">
            <Stack>
              <FormInput
                form={form}
                fieldName="first_name"
                placeholder="input your first name"
                label="First Name"
                id="edit-contact-first-name"
              />
              <FormInput
                form={form}
                fieldName="last_name"
                placeholder="input your last name"
                label="Last Name"
                id="edit-contact-last-name"
              />
              <FormInput
                form={form}
                fieldName="job"
                placeholder="input your job"
                label="Job"
                id="edit-contact-job"
              />
              <FormInput
                form={form}
                fieldName="description"
                placeholder="input your description"
                label="Description"
                id="edit-contact-description"
              />
            </Stack>
            <Button onClick={() => onEditContact()} id="edit-contact-submit" type="submit">
              Update
            </Button>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
