import { Flex, Icon, Input } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export function SearchBar() {
  return (
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
  );
}
