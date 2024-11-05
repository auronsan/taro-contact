'use client';

import { useForm } from '@mantine/form';
import { Button } from '@/components/Button';
import { FormInput } from '@/components/FormInput';
import { Modal } from '@/components/Modal';
import { Stack } from '@/components/Stack';
import { useToast } from '@/providers/ToastProvider';
import { useMutateAddContact } from '@/services/contacts';

type TAddContactModalProps = {
  opened: boolean;
  onClose: () => void;
};

export const AddContactModal = (props: TAddContactModalProps): React.ReactElement => {
  const { opened, onClose } = props;
  const addContact = useMutateAddContact();

  const { showError } = useToast();

  const form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      job: '',
      description: '',
    },
    validate: {
      first_name: (value) => (value ? null : 'First Name is required'),
      last_name: (value) => (value ? null : 'Last Name is required'),
      job: (value) => (value ? null : 'Job is required'),
      description: (value) => (value ? null : 'Description is required'),
    },
    validateInputOnBlur: true,
  });

  const onSubmit = () => {};

  const onAddContact = async () => {
    const validate = form.validate();
    if (validate.hasErrors) {
      showError(validate.errors);
      return;
    }
    await addContact.mutateAsync(form.values);
    form.reset();
    onClose();
  };

  return (
    <>
      <Modal visible={opened} onClose={() => onClose()} title="Add Contact">
        <form
          id="add-contact-form"
          data-testid="add-contact-form"
          onSubmit={form.onSubmit(onSubmit)}
        >
          <Stack gap="lg">
            <Stack>
              <FormInput
                form={form}
                fieldName="first_name"
                placeholder="input your first name"
                label="First Name"
                id="add-contact-first-name"
              />
              <FormInput
                form={form}
                fieldName="last_name"
                placeholder="input your last name"
                label="Last Name"
                id="add-contact-last-name"
              />
              <FormInput
                form={form}
                fieldName="job"
                placeholder="input your job"
                label="Job"
                id="add-contact-job"
              />
              <FormInput
                form={form}
                fieldName="description"
                placeholder="input your description"
                label="Description"
                id="add-contact-description"
              />
            </Stack>
            <Button onClick={() => onAddContact()} type="submit" id="add-contact-submit">
              Add
            </Button>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
