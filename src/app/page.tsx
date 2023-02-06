'use client';

import { Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      Welcome
      <Flex as="form" w="100%" maxW="360px">
        Now chakra-ui is working
      </Flex>
    </Flex>
  );
}
