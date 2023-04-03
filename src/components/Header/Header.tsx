import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-between p-4 bg-purple-700 text-white font-bold'>
      <h2>Shop Name</h2>
      <Link
        to='/shop'
        className='hover:text-sky-300 hover:underline underline-offset-2'>
        Shop
      </Link>
    </header>
  );
};

export default Header;
