import React from 'react';

import ShoppingCart from '../interfaces/ShoppingCart';
import ProductList, { ProductListType } from '../ProductList';
import { Link } from 'react-router-dom';

interface CartPageProps {
  items: ShoppingCart;
}

const CartPage = (props: CartPageProps) => {
  const { items } = props;
  const itemsArr = Object.values(items);

  return (
    <main className='max-w-[1440px] m-auto p-4'>
      <div className='grid gap-3 text-sm mt-1'>
        <div>
          <Link to='/'>Home</Link> &gt;{' '}
          <Link to='/cart' className='text-neutral-500'>
            My Cart
          </Link>
        </div>
      </div>
      <div className='flex flex-row justify-between items-end'>
        <h3 className='uppercase text-4xl font-klavika-medium tracking-wide mt-8'>
          My Cart {`(${itemsArr.length})`}
        </h3>
        <Link
          to={'/all-products'}
          className='uppercase underline text-neutral-500'>
          Continue Shopping
        </Link>
      </div>
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
