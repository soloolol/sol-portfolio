import DarkToggleButton from '../DarkToggleButton';
import { AsideProps } from './Aside';

function Header({ onToggleMenu }: Pick<AsideProps, 'onToggleMenu'>) {
  const handleToggleMenu = () => {
    onToggleMenu();
  };

  return (
    <header className="sticky top-0 z-50 bg-opacity-90 backdrop-blur-lg">
      <nav className="container h-16 max-w-5xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-300 dark:text-gray-500">
            Sol&apos;s PORTFOLIO
          </p>
        </div>
        <div className="flex items-center gap-x-6">
          <div className="hidden md:flex items-center gap-x-6">
            <a href="#intro" className="hover:text-blue-500 transition-colors">
              홈
            </a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">
              기술
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors"
            >
              프로젝트
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors"
            >
              연락처
            </a>
          </div>
          <div className="flex items-center gap-x-2">
            <DarkToggleButton />
            <button
              id="menuToggle"
              onClick={handleToggleMenu}
              className="md:hidden p-2 text-gray-700 dark:text-white"
            >
              <i className="fas fa-bars text-2xl" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
