import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
import { ReactNode, useState } from 'react';

function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const onToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <Header onToggleMenu={onToggleMenu} />
      <Aside isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
