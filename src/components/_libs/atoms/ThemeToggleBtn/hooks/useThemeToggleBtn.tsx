import {useMemo} from 'react';

const useThemeToggleBtn = ({
  theme,
  systemTheme,
}: {
  systemTheme: 'dark' | 'light' | undefined;
  theme: string | undefined;
}) => {
  const currentTheme = useMemo(() => {
    let currentTheme: 'light' | 'dark' = 'light';
    if (!theme || !systemTheme) {
      return currentTheme;
    }

    if (theme === 'system') {
      return systemTheme;
    }

    currentTheme = theme as 'light' | 'dark';

    return currentTheme;
  }, [theme, systemTheme]);

  return {currentTheme};
};

export default useThemeToggleBtn;
