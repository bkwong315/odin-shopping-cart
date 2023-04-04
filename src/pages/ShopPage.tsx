import React from 'react';
import { Link } from 'react-router-dom';

import Product from '../interfaces/Product';

interface ShopProps {
  ProductList: { [productId: string]: Product };
}

const Shop = (props: ShopProps) => {
  const { ProductList } = props;
  return (
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
  );
};

export default Shop;
