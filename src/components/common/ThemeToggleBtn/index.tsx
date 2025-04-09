/* eslint-disable no-empty-pattern */
'use client';
import useThemeToggleBtn from './hooks/useThemeToggleBtn';
import LightModeBtnComponent from './components/LightModeBtnComponent';
import DarkModeBtnComponent from './components/DarkModeBtnComponent';

const ThemeToggleBtn = ({}) => {
  const {currentTheme, mounted, handleToggleClick} = useThemeToggleBtn();

  if (!mounted) {
    return null;
  }

  return (
    <>
      <LightModeBtnComponent
        visible={currentTheme === 'light'}
        onClick={() => handleToggleClick('dark')}
      />
      <DarkModeBtnComponent
        visible={currentTheme === 'dark'}
        onClick={() => handleToggleClick('light')}
      />
    </>
  );
};

export default ThemeToggleBtn;
