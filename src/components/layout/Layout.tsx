import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  initDark: boolean | undefined;
  onChangeDarkMode: (e: boolean) => void;
}

function Layout({ children, initDark, onChangeDarkMode }: LayoutProps) {
  return (
    <>
      <Header initDark={initDark} onChangeDarkMode={onChangeDarkMode} />
      <Aside />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
