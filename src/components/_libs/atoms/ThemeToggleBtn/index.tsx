'use client';
import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import useThemeToggleBtn from './hooks/useThemeToggleBtn';
import LightModeBtnComponent from './components/LightModeBtnComponent';
import DarkModeBtnComponent from './components/DarkModeBtnComponent';

const ThemeToggleBtn = ({}) => {
  const [mounted, setMounted] = useState(false);
  const {theme, systemTheme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const {currentTheme} = useThemeToggleBtn({theme, systemTheme});

  if (!mounted) return null;

  return (
    <>
      <LightModeBtnComponent
        visible={currentTheme === 'light'}
        onClick={() => setTheme('dark')}
      />
      <DarkModeBtnComponent
        visible={currentTheme === 'dark'}
        onClick={() => setTheme('light')}
      />
    </>
  );
};

export default ThemeToggleBtn;
