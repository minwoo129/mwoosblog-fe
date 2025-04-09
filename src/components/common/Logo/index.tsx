import React from 'react';
import '../../../app/css/commonComponents.css';
import Link from 'next/link';

interface LogoProps {
  type: 'linked' | 'basic';
}

const Logo = ({type}: LogoProps) => {
  if (type === 'basic') {
    return (
      <div className="basicLogo">
        <h1 className="logoTxt">{"MWoo's Blog"}</h1>
      </div>
    );
  }
  return (
    <Link href="/">
      <div className="logoHover">
        <h1 className="logoTxt">{"MWoo's Blog"}</h1>
      </div>
    </Link>
  );
};

export default Logo;
