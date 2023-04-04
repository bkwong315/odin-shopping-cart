import React from 'react';

import ShoppingCart from '../interfaces/ShoppingCart';

interface CartSidebarProps {
  items: ShoppingCart;
}

const CartSidebar = (props: CartSidebarProps) => {
  const { items } = props;

  return (
    <div className='fixed w-screen h-screen top-0 left-0 grid place-items-end bg-slate-800 bg-opacity-30'>
      <div className='bg-purple-600 right-0 w-[20%] h-full p-4 text-white font-bold'>
        <h3>Your Cart</h3>
        {Object.entries(items).map((item, idx) => {
          const { product, quantity } = item[1];
          return (
            <div key={idx}>
              {product.name} {quantity}
            </div>
          );
        })}
        <div>
          Subtotal:{' '}
          {Object.entries(items).reduce(
            (reducer, item) =>
              reducer + item[1].product.price * item[1].quantity,
            0
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
