import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLink from './HeaderLink';

const Header = () => {
  return (
    <header className='text-white'>
      <div className='px-[4%] py-8 bg-black'>
        <div className='flex justify-between max-w-[1440px] m-auto'>
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
              className='font-bold text-lg pl-4 transition-[color] hover:text-neutral-400 border-solid border-l-[1px] border-[rgba(255,255,255,.4)]'>
              Store
            </Link>
          </div>
          <div className='flex gap-10'>
            <Link
              to='/cart'
              className='flex items-center p-2 hover:bg-white/[.15] rounded'>
              <img
                src='./assets/icons/cart-shopping-solid.svg'
                className={`h-4`}
                alt='shopping cart'
              />
            </Link>
            <div className='flex items-center p-2 hover:bg-white/[.15] rounded'>
              <img
                src='./assets/icons/search.svg'
                className={`h-4`}
                alt='shopping cart'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='px-[4%] py-8 bg-[#1a1a1b]'>
        <div className='flex justify-between max-w-[1440px] m-auto'>
          <ul className='flex flex-auto gap-16 font-normal'>
            <HeaderLink linkUrl='/processors' text='Processors' />
            <HeaderLink linkUrl='/graphics-cards' text='Graphics Cards' />
            <HeaderLink linkUrl='/all-products' text='All Products' />
            <HeaderLink linkUrl='/promotions' text='Promotions' />
            <HeaderLink linkUrl='/faq' text='Store Help' />
          </ul>
          <div>
            <Link to={'/'}>Sign In</Link>{' '}
            <span className='text-[gray]'>or</span>{' '}
            <Link to={'/'}>Register</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
