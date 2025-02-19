import { useState, useEffect } from 'react';
import { LayoutProps } from './Layout';

export type HeaderProps = Pick<LayoutProps, 'initDark' | 'onChangeDarkMode'>;

function Header({ initDark, onChangeDarkMode }: HeaderProps) {
  const [isDark, setIsDark] = useState<boolean | undefined>(initDark);

  const handleDarkModeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeDarkMode(e.target?.checked);
  };
  console.log('header initDark:', initDark);

  useEffect(() => {
    if (initDark !== undefined) setIsDark(initDark);
  }, []);

  // const mobileMenu = document.getElementById('mobileMenu');
  // // 모바일 메뉴 열기
  // document.getElementById('menuToggle')?.addEventListener('click', () => {
  //   mobileMenu.classList.toggle('translate-x-full');
  // });
  // document.getElementById('closeMenu')?.addEventListener('click', () => {
  //   mobileMenu.classList.add('translate-x-full');
  // });
  return (
    <header className="sticky top-0 z-50 bg-opacity-90 backdrop-blur-lg">
      <nav className="container max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Sol&apos;s PORTFOLIO
          </p>
        </div>

        <div className="hidden md:flex items-center gap-x-6">
          <a href="#intro" className="hover:text-blue-500 transition-colors">
            홈
          </a>
          <a href="#about" className="hover:text-blue-500 transition-colors">
            소개
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
          {isDark ?? (
            <>
              <input
                type="checkbox"
                checked={isDark}
                id="darkModeToggle"
                onChange={handleDarkModeToggle}
                className="hidden" // 기본 input을 숨기고 label을 스타일링
              />
              <label
                htmlFor="darkModeToggle"
                className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:outline-none hover:ring focus:ring-blue-500 cursor-pointer"
              >
                <i
                  className={`fas ${isDark ? 'fa-sun text-yellow-400' : 'fa-moon text-gray-700 dark:text-yellow-400'}`}
                />
              </label>
            </>
          )}
        </div>
        <button
          id="menuToggle"
          className="md:hidden p-2 text-gray-700 dark:text-white"
        >
          <i className="fas fa-bars text-2xl" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
