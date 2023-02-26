import { Box, Stack, Text } from '@chakra-ui/react';

type NavSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text color="gray.400" fontSize="small" textTransform="uppercase">
        {title}
      </Text>
      <Stack spacing="4" mt="6" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
