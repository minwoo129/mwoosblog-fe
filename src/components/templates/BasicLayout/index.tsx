import {ReactNode} from 'react';
import Navigation from './Navigation';
import Footer from '../Footer';
//import ThemeToggleBtn from '../../atoms/ThemeToggleBtn';

const BasicLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className=" flex flex-col w-screen h-screen overflow-hidden">
      <Navigation />

      {/* <ThemeToggleBtn /> */}
      <div className=" flex-1 w-full overflow-auto overflow-y-scroll">
        <div className="w-full min-h-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default BasicLayout;
