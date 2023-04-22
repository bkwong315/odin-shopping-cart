import React from 'react';

import ShoppingCart from '../interfaces/ShoppingCart';
import ProductList, { ProductListType } from '../ProductList';
import { Link, useLocation } from 'react-router-dom';

interface CartPageProps {
  items: ShoppingCart;
}

const CartPage = (props: CartPageProps) => {
  const { items } = props;
  const location = useLocation();

  return (
    <main>
      <div className='grid gap-3'>
        <div>
          <Link to='/'>Home</Link> &gt;{' '}
          <Link to='/cart' className='text-neutral-500'>
            My Cart
          </Link>
        </div>
      </div>
      <h3>Your Cart</h3>
      {Object.entries(items).map((item, idx) => {
        const { productInfo, quantity } = item[1];

        const product =
          ProductList[
            productInfo[1].replace('-', '_') as keyof ProductListType
          ][productInfo[0]];

        return (
          <div key={idx}>
            {product.name} {quantity}
          </div>
        );
      })}
      <span>
        Subtotal:{' '}
        {Object.values(items).reduce((reducer, item) => {
          const product =
            ProductList[item.productInfo[1] as keyof ProductListType][
              item.productInfo[0]
            ];
          return (
            reducer +
            (product.salePrice
              ? parseFloat(product.salePrice)
              : parseFloat(product.price)) *
              item.quantity
          );
        }, 0)}
      </span>
    </main>
  );
};

export default CartPage;
