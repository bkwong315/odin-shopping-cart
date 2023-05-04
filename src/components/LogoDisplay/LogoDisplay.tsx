import React from 'react';
import { Link } from 'react-router-dom';

const LogoDisplay = () => {
  return (
    <div className='flex items-center gap-4'>
      <Link to='https://www.amd.com/en.html'>
        <img
          src='./assets/imgs/amd-header-logo.svg'
          className={`h-6`}
          alt='AMD'
        />
      </Link>
      <Link
        to='/'
        className='font-bold text-lg pl-4 transition-[color] hover:text-neutral-400 border-solid border-l-[1px] border-[rgba(255,255,255,.4)]'>
        Store
      </Link>
    </div>
  );
};

export default LogoDisplay;
