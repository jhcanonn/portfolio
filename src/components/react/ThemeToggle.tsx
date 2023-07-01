import { THEME_TAG, ThemeMode } from '@models/global';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem(THEME_TAG) ?? ThemeMode.LIGHT
  );

  const handleClick = () => {
    setTheme(theme === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT);
  };

  useEffect(() => {
    if (theme === ThemeMode.DARK) {
      document.body.classList.add(ThemeMode.DARK);
      document.body.classList.remove(ThemeMode.LIGHT);
    } else {
      document.body.classList.add(ThemeMode.LIGHT);
      document.body.classList.remove(ThemeMode.DARK);
    }
    localStorage.setItem(THEME_TAG, theme);
  }, [theme]);

  return (
    <button
      onClick={handleClick}
      className="text-2xl md:text-5xl flex justify-center md:justify-end w-12"
    >
      <div className="hover:hover-theme p-2">
        <i className={`gg-${theme === ThemeMode.LIGHT ? 'moon' : 'sun'}`}></i>
      </div>
    </button>
  );
};

export default ThemeToggle;
