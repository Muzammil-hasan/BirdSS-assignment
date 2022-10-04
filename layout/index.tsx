import Header from '@/layout/Header';
import Sidebar from '@/layout/Sidebar';
import { Fragment, ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </Fragment>
  );
}
