'use client';

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import Pagination from '@/components/Pagination';

export default function Users() {
  return (
    <>
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          Usuários
        </Heading>
        <Button
          as="a"
          size="sm"
          fontSize="sm"
          colorScheme="pink"
          leftIcon={<Icon as={RiAddLine} fontSize="20" />}
        >
          Criar novo
        </Button>
      </Flex>

      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th px="6" color="gray.300" width="8">
              <Checkbox colorScheme="pink" />
            </Th>
            <Th>Usuário</Th>
            <Th>Data de cadastro</Th>
            <Th></Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td px="6">
              <Checkbox colorScheme="pink" />
            </Td>
            <Td>
              <Box>
                <Text fontWeight="bold">Kevin Willian</Text>
                <Text fontSize="sm" color="gray.300">
                  kevinwillian084@gmail.com
                </Text>
              </Box>
            </Td>
            <Td>14 de Fevereiro, 2023</Td>
            <Td>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="purple"
                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
              >
                Editar
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Pagination />
    </>
  );
}
