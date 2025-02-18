function Aside() {
  return (
    <aside
      id="mobileMenu"
      className="block md:hidden fixed right-0 inset-y-0 w-64 bg-white dark:bg-gray-800 shadow-lg translate-x-full transition-transform duration-300 z-20"
    >
      <button id="closeMenu" className="p-2 m-4 text-gray-700 dark:text-white">
        <i className="fas fa-times text-2xl"></i>
      </button>
      <nav className="flex flex-col space-y-4 mt-10 px-6">
        <a href="#home" className="hover:text-blue-500 transition-colors">
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
        <button
          id="darkModeToggleMobile"
          className="p-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
        >
          <i className="fas fa-moon text-gray-700 dark:text-yellow-400"></i>
        </button>
      </nav>
    </aside>
  );
}

export default Aside;
