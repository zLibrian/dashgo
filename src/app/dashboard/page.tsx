'use client';

import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Flex } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <div>
      <Flex direction="column" h="100vh" maxW={1480} mx="auto">
        <Header />
        <Flex w="full" bg="red" my="6" px="6">
          <Sidebar />
        </Flex>
      </Flex>
    </div>
  );
}
