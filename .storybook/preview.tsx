import React, { useEffect } from 'react';
import { Roboto } from 'next/font/google';
import { addons } from '@storybook/preview-api';
import { GlobalProvider } from '@/providers/GlobalProvider';

import '@/app/global.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: false,
  },
};

const channel = addons.getChannel();

export const decorators = [
  (renderStory: any) => (
    <main className={roboto.className}>
      <GlobalProvider>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
          }}
        >
          {renderStory()}
        </div>
      </GlobalProvider>
    </main>
  ),
];
