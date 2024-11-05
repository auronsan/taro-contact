import React from 'react';
import { Modal } from './index';

export default {
  title: 'components/Modal',
  component: Modal,
};

export const Default = () => (
  <Modal visible title="Modal Title">
    <p>Modal content goes here</p>
  </Modal>
);

export const Hidden = () => (
  <Modal visible={false}>
    <p>Modal content goes here</p>
  </Modal>
);
