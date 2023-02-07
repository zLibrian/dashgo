'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/theme';

type ChakraProps = {
  children: React.ReactNode;
};

export function Chakra(props: ChakraProps) {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
}
