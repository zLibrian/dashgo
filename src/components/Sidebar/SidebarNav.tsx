import { Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" fontWeight="bold" as="nav">
      <NavSection title="Geral">
        <NavLink icon={RiDashboardLine} title="Dashboard" />
        <NavLink icon={RiContactsLine} title="Usuários" />
      </NavSection>

      <NavSection title="Automação">
        <NavLink icon={RiInputMethodLine} title="Formulários" />
        <NavLink icon={RiGitMergeLine} title="Automação" />
      </NavSection>
    </Stack>
  );
}
