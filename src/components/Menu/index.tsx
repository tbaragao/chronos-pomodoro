import styles from './styles.module.css';
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme =
      (localStorage.getItem('@Chronos:theme') as AvailableThemes) || 'dark';

    return savedTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  // Toda vez que o componente
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('@Chronos:theme', theme);
  }, [theme]);

  return (
    <>
      <nav className={styles.menu}>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Ir para a Home'
          title='Ir para a Home'
        >
          <HouseIcon />
        </a>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Ver histórico'
          title='Ver histórico'
        >
          <HistoryIcon />
        </a>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Configurações'
          title='Configurações'
        >
          <SettingsIcon />
        </a>
        <a
          href='#'
          className={styles.menuLink}
          aria-label='Mudar tema'
          title='Mudar tema'
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
}
