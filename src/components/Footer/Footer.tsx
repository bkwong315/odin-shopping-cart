import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinkList from './SocialLinkList';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='flex justify-between items-center max-w-[1440px] m-auto'>
        <div className='flex items-center gap-4'>
          <Link to='/'>
            <img
              src='./assets/imgs/amd-header-logo.svg'
              className={`h-6`}
              alt='AMD'
            />
          </Link>
          <Link
            to='/shop'
            className='hover:text-sky-300 hover:underline underline-offset-2 font-bold text-lg pl-4 border-solid border-l-[1px] border-[rgba(255,255,255,.4)]'>
            Store
          </Link>
        </div>
        <SocialLinkList />
      </div>
    </footer>
  );
};

export default Footer;
