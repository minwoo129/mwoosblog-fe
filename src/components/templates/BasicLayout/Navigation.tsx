/* eslint-disable no-empty-pattern */
import Link from 'next/link';
import {GithubOutlined} from '@ant-design/icons';
import '../../../app/css/navigation.css';
import Logo from '@/components/common/Logo';

const Navigation = ({}) => {
  return (
    <div className="navigation">
      <Logo type="linked" />
      <div className="navRightGrid">
        <GithubBtn />
      </div>
    </div>
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
