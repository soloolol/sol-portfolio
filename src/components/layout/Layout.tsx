import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
import { ReactNode, useState } from 'react';

export interface LayoutProps {
  children: ReactNode;
  initDark?: boolean | undefined;
  onChangeDarkMode: (isDark: boolean) => void;
}

function Layout({ children, initDark, onChangeDarkMode }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const onToggleMenu = () => {
    setIsMenuOpen((prev)=>!prev);
  }
  return (
    <>
      <Header initDark={initDark} onChangeDarkMode={onChangeDarkMode} onToggleMenu={onToggleMenu} />
      <Aside isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu}/>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
