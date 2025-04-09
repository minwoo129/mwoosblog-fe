/* eslint-disable no-empty-pattern */
import Link from 'next/link';
import {GithubOutlined} from '@ant-design/icons';
import '../../../app/css/navigation.css';

const Navigation = ({}) => {
  return (
    <div className="navigation">
      <Logo />
      <div className="navRightGrid">
        <GithubBtn />
      </div>
    </div>
  );
};

const Logo = ({}) => {
  return (
    <Link href="/">
      <div className="logo">
        <h1 className="logoTxt">{"MWoo's Blog"}</h1>
      </div>
    </Link>
  );
};

const GithubBtn = ({}) => {
  return (
    <Link href={'https://github.com/minwoo129'} target="_blank">
      <GithubOutlined style={{fontSize: 32}} />
    </Link>
  );
};

export default Navigation;
