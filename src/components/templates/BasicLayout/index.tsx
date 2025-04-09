import {ReactNode} from 'react';
import Navigation from './Navigation';
//import ThemeToggleBtn from '../../atoms/ThemeToggleBtn';

const BasicLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className=" flex flex-col w-screen h-screen overflow-hidden">
      <Navigation />

      {/* <ThemeToggleBtn /> */}
      <div className=" w-full min-h-full overflow-auto overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default BasicLayout;
