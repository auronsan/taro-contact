import clsx from 'clsx';
import { Box } from '@/components/Box';
import { Overlay } from '@/components/Overlay';
import { Text } from '@/components/Text';
import { Stack } from '../Stack';
import classes from './modal.module.css';

type ModalProps = {
  children: React.ReactNode;
  visible?: boolean;
  onClose?: () => void;
};

export function Modal({ children, visible, onClose }: ModalProps) {
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
          <Box>
            <Text
              onClick={() => {
                if (typeof onClose === 'function') {
                  onClose();
                }
              }}
            >
              Close
            </Text>
          </Box>

          {children}
        </Stack>
      </Box>
      <Overlay />
    </Box>
  );
}
