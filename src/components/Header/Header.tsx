import React from 'react';
import { Link } from 'react-router-dom';

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
            {location.pathname === '/' && (
              <Link
                to='/shop'
                className='hover:text-sky-300 hover:underline underline-offset-2 font-bold text-lg pl-4 border-solid border-l-[1px] border-[rgba(255,255,255,.4)]'>
                Store
              </Link>
            )}
          </div>
          <div className='flex gap-4'>
            <Link
              to='/cart'
              className='hover:text-sky-300 hover:underline underline-offset-2'>
              My Cart
            </Link>
          </div>
        </div>
      </div>
      <div className='px-[4%] py-8 bg-[#1a1a1b]'>
        <div className='flex justify-between max-w-[1440px] m-auto'>
          <ul className='flex flex-auto gap-16 font-normal'>
            <li>Products</li>
            <li>Solutions</li>
            <li>Downloads & Support</li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
