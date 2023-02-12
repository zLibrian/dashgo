'use client';

import { Flex, Input, Text, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from 'react-icons/ri';

export function Header() {
  return (
    <Flex as="header" w="100%" h="20" mt="4" px="6" align="center">
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        Dashgo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={450}
        color="gray.200"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          px="2"
          mr="4"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
          variant="unstyled"
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
      <Flex ml="auto" align="center">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          fontSize="20"
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} />
          <Icon as={RiUserAddLine} />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Kevin Willian</Text>
            <Text color="gray.300" fontSize="sm">
              kevinwillian084@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Kevin Willian"
            color="white"
            bg="gray.500"
            src="https://github.com/zLibrian.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
