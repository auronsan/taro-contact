import './global.css';

import React from 'react';
import { Roboto } from 'next/font/google';
import { GlobalProvider } from '@/providers/GlobalProvider';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Taro Contact',
  description: 'I am using taro Contact!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={roboto.className}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
