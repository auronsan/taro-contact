import React from 'react';
import { Toast, ToastContainer } from './index';

export default {
  title: 'Components/Toast',
  component: Toast,
};

export const Default = () => (
  <ToastContainer>
    <Toast message="Default Toast" onDismiss={() => {}} />
  </ToastContainer>
);

export const Success = () => (
  <ToastContainer>
    <Toast message="Success Toast" onDismiss={() => {}} type="success" />
  </ToastContainer>
);

export const Error = () => (
  <ToastContainer>
    <Toast message="Error Toast" onDismiss={() => {}} type="error" />
  </ToastContainer>
);

export const WithDuration = () => (
  <ToastContainer>
    <Toast message="Toast with Duration" onDismiss={() => {}} duration={5000} />
  </ToastContainer>
);
