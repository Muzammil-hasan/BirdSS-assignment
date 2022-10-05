import { MenuContextProvider } from '@/context/MenuContext';
import Header from '@/layout/Header';
import Sidebar from '@/layout/Sidebar';
import { Fragment, ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <MenuContextProvider>
        <Header />
        <Sidebar />
      </MenuContextProvider>
      <main>{children}</main>
    </Fragment>
  );
}
