import { createContext, ReactNode, useContext, useState } from 'react';

const MenuContext = createContext<any>({});

export function MenuContextProvider({ children }: { children: ReactNode }) {
  return <MenuContext.Provider value={useState<boolean>(false)}>{children}</MenuContext.Provider>;
}

export function useMenuContext() {
  return useContext(MenuContext);
}
