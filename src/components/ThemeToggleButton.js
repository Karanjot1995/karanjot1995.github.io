import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '../images';

import styles from '../styles/theme-toggle-button.module.css';

const COLOR_THEME = 'colorTheme';

function getThemeFromLocalStorage() {
  return window.localStorage.getItem(COLOR_THEME) || 'light';
}

function useDarkMode() {
  const [mode, setMode] = useState(() => getThemeFromLocalStorage());

  useEffect(() => {
    window.localStorage.setItem(COLOR_THEME, mode);

    document.body.dataset.theme = mode;
  }, [mode]);
  return [mode, setMode];
}

const ThemeToggleButton = () => {
  const [mode, setMode] = useDarkMode();

  useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);

  function handleThemeChange(e) {
    setMode(mode === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className={styles.toggleContainer}>
      <input
        type="checkbox"
        className={styles.toggleCheckbox}
        id="toggle"
        onChange={handleThemeChange}
        defaultChecked={mode === 'dark'}
      />
      <label className={styles.toggleLabel} htmlFor="toggle">
        <img src={SunIcon} className={styles.toggleIcons} alt="" />
        <img src={MoonIcon} className={styles.toggleIcons} alt="" />

        <div className={styles.toggleBall} />
      </label>
    </div>
  );
};

export default ThemeToggleButton;
