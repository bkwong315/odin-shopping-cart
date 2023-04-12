import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Product from '../interfaces/Product';

interface ShopProps {
  ProductList: { [productId: string]: Product };
}

const Shop = (props: ShopProps) => {
  const { ProductList } = props;
  const [sortMethod, setSortMethod] = useState('featured');

  const selectOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortMethod(e.target.value);
  };

  return (
    <main className='max-w-[1440px] m-auto p-4'>
      <header className='text-sm'>
        <div className='grid gap-3'>
          <div className=''>
            Home &gt; <span className='text-neutral-500'>Processors</span>
          </div>
          <h3 className='uppercase text-4xl font-klavika-medium'>Processors</h3>
        </div>
        <div className='flex justify-between w-full mt-12'>
          <div>Displaying 1 - 9 of 14</div>
          <div className='flex items-center gap-2'>
            <span className='font-noto-sans-medium font-medium'>Sort by:</span>
            <span className='relative after:content-[""] after:w-4 after:h-2 after:scale-75 after:top-1/2 after:-translate-y-1/2 after:right-2 after:bg-neutral-600 after:select-triangle after:absolute'>
              <select
                name='sort-by-selector'
                id='sort-by-selector'
                value={sortMethod}
                onChange={selectOnChangeHandler}
                className='appearance-none pl-2 pr-24 py-2 bg-transparent border border-neutral-300 focus-visible:outline-none'>
                <option value='featured'>Featured Items</option>
                <option value='newest'>Newest Items</option>
                <option value='alphabetical'>A to Z</option>
                <option value='reverseAlphabetical'>Z to A</option>
                <option value='priceAscending'>Price: Ascending</option>
                <option value='priceDescending'>Price: Descending</option>
              </select>
            </span>
          </div>
        </div>
      </header>
      <div className='text-center'>
        <h3>Shop</h3>{' '}
        {Object.entries(ProductList).map((product, idx) => {
          const { id, name, price } = product[1];

          return (
            <div key={idx}>
              <Link to={`/shop/product/${id}`}>
                {id} {name} {price}
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Shop;
