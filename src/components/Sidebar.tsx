import { Box, Link, Stack, Text, Icon } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" fontWeight="bold" as="nav">
        <Box>
          <Text color="gray.400" fontSize="small" textTransform="uppercase">
            Geral
          </Text>
          <Stack spacing="4" mt="6" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4">Dashboard</Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4">Usuários</Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text color="gray.400" fontSize="small" textTransform="uppercase">
            Automação
          </Text>
          <Stack spacing="4" mt="6" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text ml="4">Formulários</Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text ml="4">Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
