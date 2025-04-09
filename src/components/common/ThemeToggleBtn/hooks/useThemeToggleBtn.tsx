import {ThemeType} from '@/constants/Themes';
import {useTheme} from 'next-themes';
import {useEffect, useMemo, useState} from 'react';

const useThemeToggleBtn = () => {
  const [mounted, setMounted] = useState(false);
  const {theme, systemTheme, setTheme} = useTheme();

  useEffect(() => {
    if (!mounted) setMounted(true);
  }, [mounted]);

  const currentTheme = useMemo(() => {
    let currentTheme: ThemeType = 'light';
    if (!theme || !systemTheme) {
      return currentTheme;
    }

    if (theme === 'system') {
      return systemTheme;
    }

    currentTheme = theme as ThemeType;

    return currentTheme;
  }, [theme, systemTheme]);

  const handleToggleClick = (type: ThemeType) => {
    setTheme(type);
  };

  return {mounted, currentTheme, handleToggleClick};

  // return {currentTheme};
};

export default useThemeToggleBtn;
