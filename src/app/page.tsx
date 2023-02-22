'use client';

import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/components/Form';
import { Input } from '@/components/Form/Input';

const signInFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function Home() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (data, e) => {
    e?.preventDefault();
    console.log(data);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Form onSubmit={handleSubmit(handleSignIn)}>
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
          isDisabled={!formState.isValid}
          _disabled={{
            filter: 'brightness(0.7)',
            cursor: 'not-allowed',
          }}
        >
          Login
        </Button>
      </Form>
    </Flex>
  );
}
