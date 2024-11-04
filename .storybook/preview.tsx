import React, { useEffect } from 'react';
import { addons } from '@storybook/preview-api';

export const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: false,
  },
};

const channel = addons.getChannel();

export const decorators = [(renderStory: any) => <>{renderStory()}</>];
