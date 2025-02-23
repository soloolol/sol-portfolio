export interface AsideProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

function Aside({ isMenuOpen, onToggleMenu } : AsideProps) {
  
  const handleToggleMenu = () =>{
    onToggleMenu();
  }

  return (
    <aside
      id="mobileMenu"
      className={`block ${ !isMenuOpen && "translate-x-full" } md:hidden fixed right-0 inset-y-0 z-50 w-32 bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300`}
    >
      <div className="flex-col items-right text-right">
      <button id="closeMenu" onClick={handleToggleMenu} className="p-2 m-4 text-gray-700 dark:text-white">
        <i className="fas fa-times text-2xl"></i>
      </button>
      <nav className="flex flex-col space-y-4 mt-10 px-6">
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
      </nav>
      </div>

    </aside>
  );
}

export default Aside;
