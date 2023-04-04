import React from 'react';

import ShoppingCart from '../interfaces/ShoppingCart';

interface CartSidebarProps {
  items: ShoppingCart;
}

const CartSidebar = (props: CartSidebarProps) => {
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
    </div>
  );
};

export default CartSidebar;
