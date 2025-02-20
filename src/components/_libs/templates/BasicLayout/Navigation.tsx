import Link from 'next/link';
import {ComponentProps} from 'react';

interface NavBtnProps extends Omit<ComponentProps<typeof Link>, 'children'> {
  children: string;
}

const Navigation = ({}) => {
  return (
    <div className="w-full flex flex-row justify-between items-center px-4 py-2 drop-shadow-2xl ">
      <Logo />
      <div className="flex flex-row gap-4">
        {/* <NavBtn href="/">Home</NavBtn> */}
        {/* <NavBtn href="/">About</NavBtn> */}
      </div>
    </div>
  );
};

const Logo = ({}) => {
  return (
    <Link href="/">
      <div className="w-fit h-fit p-2 rounded-md transition ease-in-out duration-300 hover:text-orange-500 font-bold">
        <h1 className=" text-[20px] font-">{"MWoo's Blog"}</h1>
      </div>
    </Link>
  );
};

const NavBtn = ({href, children, ...props}: NavBtnProps) => {
  return (
    <Link href={href} {...props}>
      <div className="w-fit h-fit p-2  rounded-md transition ease-in-out duration-300 hover:text-orange-500">
        {children}
      </div>
    </Link>
  );
};

export default Navigation;
