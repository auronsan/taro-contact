import React from 'react';
import { Stack } from './index';

export default {
  title: 'Components/Stack',
  component: Stack,
};

export const Default = () => (
  <Stack>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);

export const JustifyCenter = () => (
  <Stack justify="center">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);

export const JustifySpaceBetween = () => (
  <Stack justify="space-between">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);

export const JustifyEnd = () => (
  <Stack justify="end">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);

export const Wrap = () => (
  <Stack wrap="wrap">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);

export const NoWrap = () => (
  <Stack wrap="nowrap">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);

export const GapXs = () => (
  <Stack gap="xs">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);

export const GapSm = () => (
  <Stack gap="sm">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);

export const GapMd = () => (
  <Stack gap="md">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);

export const GapLg = () => (
  <Stack gap="lg">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);

export const GapXl = () => (
  <Stack gap="xl">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);

export const Padding = () => (
  <Stack p={16}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Stack>
);
