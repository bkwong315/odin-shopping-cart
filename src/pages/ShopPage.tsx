import React from 'react';
import { Link } from 'react-router-dom';

import Product from '../interfaces/Product';

interface ShopProps {
  ProductList: { [productId: string]: Product };
}

const Shop = (props: ShopProps) => {
  const { ProductList } = props;
  return (
    <main className='max-w-[1440px] m-auto p-4'>
      <header>
        <div className='grid gap-3'>
          <div className='text-sm'>
            Home &gt; <span className='text-neutral-500'>Processors</span>
          </div>
          <h3 className='uppercase text-4xl font-klavika-medium'>Processors</h3>
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
