import { Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';

import { useSidebarDrawer } from '@/context/SidebarDrawerContext';

import { Logo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { SearchBar } from './SearchBar';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useSidebarDrawer();

  return (
    <Flex as="header" w="100%" h="20" mt="4" px="6" align="center">
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<RiMenuLine />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="24"
          textAlign="center"
          mr="2"
        />
      )}
      <Logo />

      {isWideVersion && <SearchBar />}

      <Flex ml="auto" align="center">
        <NotificationNav />
        <Profile showProfile={isWideVersion} />
      </Flex>
    </Flex>
  );
}
