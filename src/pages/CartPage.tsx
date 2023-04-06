import React from 'react';

import ShoppingCart from '../interfaces/ShoppingCart';

interface CartPageProps {
  items: ShoppingCart;
}

const CartPage = (props: CartPageProps) => {
  const { items } = props;

  return (
    <div>
      <h3>Your Cart</h3>
      {Object.entries(items).map((item, idx) => {
        const { product, quantity } = item[1];

        return (
          <div key={idx}>
            {product.name} {quantity}
          </div>
        );
      })}
      <span>
        Subtotal:{' '}
        {Object.entries(items).reduce(
          (reducer, item) => reducer + item[1].product.price * item[1].quantity,
          0
        )}
      </span>
    </div>
  );
};

export default CartPage;