import Link from 'next/link';
import '../../../app/css/commonComponents.css';

interface LogoProps {
  type: 'linked' | 'basic' | 'watermark';
}

const Logo = ({ type }: LogoProps) => {
  if (type === 'basic') {
    return (
      <div className="basicLogo">
        <h1 className="logoTxt">{"MWoo's Blog"}</h1>
      </div>
    );
  }
  if (type === 'watermark') {
    return (
      <div className="basicLogo">
        <h1 className="watermarkLogoTxt">{"MWoo's Blog"}</h1>
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
