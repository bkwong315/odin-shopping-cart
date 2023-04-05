import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-between px-8 py-4 bg-purple-700 text-white font-bold'>
      <h2>Shop Name</h2>
      <div className='flex gap-4'>
        <Link
          to='/shop'
          className='hover:text-sky-300 hover:underline underline-offset-2'>
          Shop
        </Link>
        <Link
          to='/cart'
          className='hover:text-sky-300 hover:underline underline-offset-2'>
          My Cart
        </Link>
      </div>
    </header>
  );
};

export default Header;
