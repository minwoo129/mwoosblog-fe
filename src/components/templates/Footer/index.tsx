/* eslint-disable no-empty-pattern */
import Logo from '@/components/common/Logo';
import React from 'react';

const Footer = ({}) => {
  return (
    <div className="w-full border-t-2 border-white flex flex-col px-[32px] py-[16px]">
      <Logo type="basic" />
      <p className="text-white">© 2025. 류민우 All rights reserved.</p>
    </div>
  );
};

export default Footer;
