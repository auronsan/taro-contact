import React, { useEffect, useRef, useState } from 'react';
import { IconCircleCheck, IconCircleX } from '@tabler/icons-react';
import clsx from 'clsx';
import { Box } from '@/components/Box';
import { Stack } from '@/components/Stack';
import { Group } from '../Group';
import classes from './toast.module.css';

/**
 * Props for the Toast component.
 */
export type ToastProps = {
  /**
   * The id for the Toast component.
   */
  id?: string;

  /**
   * The message for the Toast component.
   */
  message: string;

  /**
   * The duration for the Toast component.
   */
  duration?: number;

  /**
   * The dismiss event handler for the Toast component.
   */
  onDismiss: (id?: string) => void;

  /**
   * The type for the Toast component.
   */
  type?: string;
};

/**
 * Toast component.
 * @param props - The props for the component.
 * @returns The rendered Toast component.
 */
export const Toast = ({
  message,
  duration = 3000,
  onDismiss,
  id,
  type = 'success',
}: ToastProps) => {
  const timer = useRef<any>();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    timer.current = setTimeout(() => {
      onDismiss(id);
    }, duration);

    const animationTimer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      if (animationTimer) {
        clearTimeout(animationTimer);
      }
    };
  }, []);

  return (
    <Box
      className={clsx(classes.toast, {
        [classes.visible]: visible,
        [classes.success]: type === 'success',
        [classes.error]: type === 'error',
      })}
    >
      <Group gap="xs">
        {type === 'success' && <IconCircleCheck size={20} color="white" />}
        {type === 'error' && <IconCircleX size={20} color="white" />}
        {message}
      </Group>
    </Box>
  );
};

/**
 * ToastContainer component.
 * @param props - The props for the component.
 * @returns The rendered ToastContainer component.
 */
export const ToastContainer = ({ children }: { children: React.ReactNode }) => (
  <Stack className={classes['toast-container']} gap="xs" id="toast-container">
    {children}
  </Stack>
);
