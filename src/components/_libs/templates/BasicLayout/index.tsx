import {ReactNode} from 'react';
import Navigation from './Navigation';
//import ThemeToggleBtn from '../../atoms/ThemeToggleBtn';

const BasicLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <Navigation />

      {/* <ThemeToggleBtn /> */}
      {children}
    </div>
  );
};

export default BasicLayout;
