'use client';

import { Roboto } from '@next/font/google';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';

type RootLayoutProps = {
  children: React.ReactNode;
};

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={roboto.className}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
