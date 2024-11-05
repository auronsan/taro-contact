export type ToastProps = {
  id?: string;
  message: string;
  type?: string;
  autoClose?: boolean | number;
  onClose?: (props: ToastProps) => void;
  onOpen?: (props: ToastProps) => void;
};
