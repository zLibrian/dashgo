'use client';

import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Form } from '@/components/Form';
import { Input } from '@/components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<SignInFormData>();

  const handleSignIn: SubmitHandler<SignInFormData> = (data, e) => {
    e?.preventDefault();
    console.log(data);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing="4">
          <Input label="Email:" type="email" {...register('email')} />
          <Input label="Password:" type="password" {...register('password')} />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Login
        </Button>
      </Form>
    </Flex>
  );
}
