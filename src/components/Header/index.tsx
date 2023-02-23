'use client';

import { Flex, Text } from '@chakra-ui/react';

import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { SearchBar } from './SearchBar';

export function Header() {
  return (
    <Flex as="header" w="100%" h="20" mt="4" px="6" align="center">
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Dashgo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>

      <SearchBar />

      <Flex ml="auto" align="center">
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
