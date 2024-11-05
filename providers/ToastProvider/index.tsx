import React, { createContext, useContext, useMemo } from 'react';
import { randomId, useQueue } from '@mantine/hooks';
import { Toast, ToastContainer } from '@/components/Toast';
import { ToastProps } from '@/providers/ToastProvider/toast-provider-types';

type TToastContext = {
  notifications: [];
  queue: [];
  showToast: (notification: ToastProps) => {};
  updateToast: (notification: ToastProps) => {};
  hideToast: (id?: string) => {};
  cleanQueue: () => {};
  clean: () => {};
  showError: (e: unknown, options?: ToastProps) => {};
};
export const ToastsContext = createContext<any>(null);

export const ToastProvider = ({
  children,
  limit = 10,
}: {
  children: React.ReactNode;
  limit?: number;
}) => {
  const { state, queue, update, cleanQueue } = useQueue<ToastProps>({
    initialValues: [],
    limit,
  });

  const showToast = (notification: ToastProps) => {
    const id = notification.id || randomId();

    update((notifications) => {
      if (notification.id && notifications.some((n) => n.id === notification.id)) {
        return notifications;
      }

      return [...notifications, { ...notification, id }];
    });

    return id;
  };

  const showError = (caughtError: string, options?: ToastProps) => {
    let errorNotificationMessage: string | string[] = '';

    if (typeof caughtError === 'string') {
      errorNotificationMessage = caughtError;
    }

    const id = randomId();

    const notification: ToastProps = {
      message: errorNotificationMessage,
      id,
      type: 'error',
      ...options,
    };

    update((notifications) => {
      if (notification.id && notifications.some((n) => n.id === notification.id)) {
        return notifications;
      }

      return [...notifications, { ...notification, id }];
    });

    return id;
  };

  const updateToast = (notification: ToastProps) =>
    update((notifications) => {
      const index = notifications.findIndex((n) => n.id === notification.id);

      if (index === -1) {
        return notifications;
      }

      const newToasts = [...notifications];
      newToasts[index] = notification;

      return newToasts;
    });

  const hideToast = (id?: string) =>
    update((notifications) =>
      notifications.filter((notification) => {
        if (notification.id === id) {
          typeof notification.onClose === 'function' && notification.onClose(notification);
          return false;
        }

        return true;
      })
    );

  const clean = () => update(() => []);

  const items = state.map((notification) => (
    <Toast key={notification.id} {...notification} onDismiss={hideToast} />
  ));

  const memoValue = useMemo(
    () => ({
      notifications: state,
      queue,
      showToast,
      updateToast,
      hideToast,
      cleanQueue,
      clean,
      showError,
    }),
    [state]
  );

  return (
    <ToastsContext.Provider value={memoValue}>
      {children}
      <ToastContainer>{items}</ToastContainer>
    </ToastsContext.Provider>
  );
};

export const useToast = (): TToastContext => useContext(ToastsContext);
