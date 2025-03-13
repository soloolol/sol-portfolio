import { useEffect, useState } from 'react';

export default function DarkToggleButton() {
  const [initDark, setInitDark] = useState<boolean | undefined>(undefined);

  const handleDarkModeChange = (changeVal: boolean) => {
    localStorage.setItem('theme', changeVal ? 'dark' : 'light');
    if (changeVal) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setInitDark(changeVal);
  };

  useEffect(() => {
    if (typeof initDark === 'undefined') {
      const initLocalstorageDark =
        document.documentElement.classList.contains('dark');
      setInitDark(initLocalstorageDark);
    }
  }, [initDark]);

  const handleDarkModeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target?.checked;
    handleDarkModeChange(val);
  };
  return (
    <>
      <input
        type="checkbox"
        checked={initDark ?? true}
        id="darkModeToggle"
        onChange={handleDarkModeToggle}
        className="hidden"
      />
      <label
        htmlFor="darkModeToggle"
        className="p-2 w-8 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:outline-none hover:ring focus:ring-blue-500 cursor-pointer"
      >
        <i
          className={
            initDark
              ? 'fas fa-sun text-yellow-400'
              : 'fas fa-moon text-gray-700'
          }
        />
      </label>
    </>
  );
}
