'use client';

import { Input } from '@/components/Form/Input';
import {
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';

import { useForm, SubmitHandler } from 'react-hook-form';

export default function CreateUser() {
  return (
    <>
      <Heading size="lg" fontWeight="normal">
        Criar usuário
      </Heading>

      <Divider my="6" borderColor="gray.700" />

      <VStack spacing="8">
        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <Input name="name" label="Nome completo" />
          <Input name="email" type="email" label="E-mail" />
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <Input name="password" type="password" label="Senha" />
          <Input
            name="password_confirmation"
            type="password"
            label="Confirmação da senha"
          />
        </SimpleGrid>

        <Flex w="100%" justify="flex-end">
          <HStack spacing="4">
            <Button colorScheme="whiteAlpha">Cancelar</Button>
            <Button colorScheme="pink">Salvar</Button>
          </HStack>
        </Flex>
      </VStack>
    </>
  );
}
