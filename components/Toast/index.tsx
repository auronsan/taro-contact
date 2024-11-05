import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Box } from '@/components/Box';
import { Stack } from '@/components/Stack';
import classes from './toast.module.css';

type ToastProps = {
  id?: string;
  message: string;
  duration?: number;
  onDismiss: (id?: string) => void;
  type?: string;
};

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
      {message}
    </Box>
  );
};

export const ToastContainer = ({ children }: { children: React.ReactNode }) => (
  <Stack className={classes['toast-container']} gap="xs">
    {children}
  </Stack>
);
