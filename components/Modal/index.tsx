import { IconX } from '@tabler/icons-react';
import clsx from 'clsx';
import { ActionIcon } from '@/components/ActionIcon';
import { Box } from '@/components/Box';
import { Group } from '@/components/Group';
import { Overlay } from '@/components/Overlay';
import { Stack } from '@/components/Stack';
import { Text } from '@/components/Text';
import classes from './modal.module.css';

/**
 * Props for the Modal component.
 */
type ModalProps = {
  /** The content to be rendered inside the modal. */
  children: React.ReactNode;
  /** Whether the modal is visible. */
  visible?: boolean;
  /** Callback function to be called when the modal is closed. */
  onClose?: () => void;
  /** The title of the modal. */
  title?: string;
};

/**
 * Modal component.
 * @param props - The props for the component.
 * @returns The rendered modal.
 */
export function Modal({ children, visible, onClose, title = '' }: ModalProps) {
  if (!visible) {
    return <></>;
  }

  return (
    <Box
      className={clsx(classes.root, {
        [classes.visible]: !!visible,
      })}
    >
      <Box className={classes.content}>
        <Stack>
          <Group justify="space-between">
            <Box>
              <Text className={classes.title}>{title}</Text>
            </Box>
            <Box>
              <ActionIcon
                onClick={() => {
                  if (typeof onClose === 'function') {
                    onClose();
                  }
                }}
              >
                <IconX />
              </ActionIcon>
            </Box>
          </Group>

          {children}
        </Stack>
      </Box>
      <Overlay />
    </Box>
  );
}
