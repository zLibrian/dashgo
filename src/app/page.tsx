'use client';

import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/components/Form';
import { Input } from '@/components/Form/Input';
import { SignInFormData, signInFormSchema } from '@/schemas/loginSchema';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { push } = useRouter();

  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  });

  const { errors, isSubmitting } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (data, e) => {
    e?.preventDefault();

    push('/dashboard');
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Form
        display="flex"
        flexDir="column"
        maxWidth="360px"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            label="Email:"
            type="email"
            {...register('email')}
            error={errors.email}
          />
          <Input
            label="Password:"
            type="password"
            {...register('password')}
            error={errors.password}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Login
        </Button>
      </Form>
    </Flex>
  );
}
