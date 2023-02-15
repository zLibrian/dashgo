'use client';
import { Box } from '@chakra-ui/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box as="section" flex="1" borderRadius="8" bg="gray.800" p="8">
      {children}
    </Box>
  );
}
