'use client';

import { Flex, Button, Stack, FormControl } from '@chakra-ui/react';

import { Form } from '@/components/Form';
import { Input } from '@/components/Form/Input';

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Form>
        <Stack spacing="4">
          <Input label="Email:" name="email" type="email" />
          <Input label="Password:" name="password" type="password" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Login
        </Button>
      </Form>
    </Flex>
  );
}
