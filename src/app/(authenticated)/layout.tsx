'use client';

import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Box, Flex } from '@chakra-ui/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Flex direction="column" h="100vh" maxW={1480} mx="auto">
        <Header />
        <Flex my="6" px="6">
          <Sidebar />
          {children}
        </Flex>
      </Flex>
    </Box>
  );
}
