'use client';

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode, useContext } from 'react';

type SidebarProps = {
  children: ReactNode;
};

const SidebarDrawerContext = createContext({} as UseDisclosureReturn);

export function SidebarDrawerProvider({ children }: SidebarProps) {
  const disclosure = useDisclosure();

  const contextValue = disclosure;

  return (
    <SidebarDrawerContext.Provider value={contextValue}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
