import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  return (
    <div className='flex justify-center gap-8 w-full max-w-[1440px]'>
      <header className='flex justify-between items-center w-full'>
        <h3 className='uppercase tracking-wide font-klavika-medium text-4xl'>
          Featured Products
        </h3>
        <Link
          className='uppercase text-sm underline text-gray-600 hover:text-gray-900 transition-[color] duration-500'
          to={'/shop'}>
          View All Products
        </Link>
      </header>
    </div>
  );
};

export default FeaturedProducts;
