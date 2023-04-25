import React from 'react';

import ShoppingCart from '../../interfaces/ShoppingCart';
import ProductList, { ProductListType } from '../../ProductList';

import CartItem from './CartItem';

interface CartDisplayProps {
  cart: ShoppingCart;
}

const CartDisplay = (props: CartDisplayProps) => {
  const { cart } = props;

  const cartItems = Object.values(cart).map((item, idx) => {
    const product =
      ProductList[
        `${item.productInfo[1].replace('-', '_')}` as keyof ProductListType
      ][item.productInfo[0]];

    return <CartItem product={product} quantity={item.quantity} key={idx} />;
  });

  return (
    <div>
      {cartItems.length <= 0 ? (
        <div className='text-neutral-700 text-2xl'>Cart is empty</div>
      ) : (
        <div>{cartItems}</div>
      )}
    </div>
  );
};

export default CartDisplay;
