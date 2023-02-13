'use client';

import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Flex, SimpleGrid } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <div>
      <Flex direction="column" h="100vh" maxW={1480} mx="auto">
        <Header />
        <Flex w="full" my="6" px="6">
          <Sidebar />
          <SimpleGrid></SimpleGrid>
        </Flex>
      </Flex>
    </div>
  );
}
