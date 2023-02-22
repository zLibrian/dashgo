'use client';

import { Input } from '@/components/Form/Input';

import { Box, Button, Divider, Flex, Heading } from '@chakra-ui/react';
import { HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm, SubmitHandler } from 'react-hook-form';

import { z } from 'zod';

const createUserFormSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirmation: z.string().min(8),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Password doesn't match",
    path: ['passwordConfirmation'],
  });

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    data
  ) => {};
  console.log(errors);

  return (
    <Box as="form" onSubmit={handleSubmit(handleCreateUser)}>
      <Heading size="lg" fontWeight="normal">
        Criar usuário
      </Heading>

      <Divider my="6" borderColor="gray.700" />

      <VStack spacing="8">
        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <Input
            label="Nome completo"
            {...register('name')}
            error={errors.name}
          />
          <Input
            type="email"
            label="E-mail"
            {...register('email')}
            error={errors.email}
          />
        </SimpleGrid>

        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
          <Input
            type="password"
            label="Senha"
            {...register('password')}
            error={errors.password}
          />
          <Input
            type="password"
            label="Confirmação da senha"
            {...register('passwordConfirmation')}
            error={errors.passwordConfirmation}
          />
        </SimpleGrid>

        <Flex w="100%" justify="flex-end">
          <HStack spacing="4">
            <Button colorScheme="whiteAlpha">Cancelar</Button>
            <Button type="submit" colorScheme="pink">
              Salvar
            </Button>
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
}
