import { useState, useEffect } from 'react';
import { LayoutProps } from './Layout';
import { AsideProps } from './Aside';

type HeaderProps = Pick<LayoutProps, 'initDark' | 'onChangeDarkMode'> & Pick<AsideProps, 'onToggleMenu'>;

function Header({ initDark, onChangeDarkMode, onToggleMenu }: HeaderProps) {
  const [isDark, setIsDark] = useState<boolean | undefined>(initDark);

  const handleDarkModeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target?.checked;
    console.log('3 header handleDarkModeToggle:', val);
    onChangeDarkMode(val);
  };

  const handleToggleMenu = () =>{
    onToggleMenu();
  }

  useEffect(() => {
    console.log("start useEffect[initDark]:", initDark)
    if (typeof initDark === 'undefined'){
      const initLocalstorageDark = document.documentElement.classList.contains('dark');
      console.log("1 최초 input checked:", initLocalstorageDark)
      setIsDark(initLocalstorageDark); 
    } else {
      setIsDark(initDark);
    }
  }, [initDark]);
  
  useEffect(()=>{
    console.log('header useEffect[isDark] isDark:', isDark);
  },[isDark])

  return (
    <header className="sticky top-0 z-50 bg-opacity-90 backdrop-blur-lg">
      <nav className="container max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Sol&apos;s PORTFOLIO
          </p>
        </div>

        <div className="hidden md:flex items-center gap-x-6">
          <a href="#intro" className="hover:text-blue-500 transition-colors">
            홈
          </a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">
            기술
          </a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">
            프로젝트
          </a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">
            연락처
          </a>
          <input
            type="checkbox"
            checked={ isDark ?? true }
            id="darkModeToggle"
            onChange={handleDarkModeToggle}
            className="hidden"
          />
          <label
            htmlFor="darkModeToggle"
            className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:outline-none hover:ring focus:ring-blue-500 cursor-pointer"
          >
            <i
              className={ isDark ? 'fas fa-sun text-yellow-400' : 'fas fa-moon text-gray-700'}
            />
          </label>
        </div>
        <button
          id="menuToggle"
          onClick={handleToggleMenu}
          className="md:hidden p-2 text-gray-700 dark:text-white"
        >
          <i className="fas fa-bars text-2xl" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
