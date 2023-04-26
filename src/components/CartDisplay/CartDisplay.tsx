import React from 'react';

import ShoppingCart from '../../interfaces/ShoppingCart';
import ProductList, { ProductListType } from '../../ProductList';

import CartItem from './CartItem';

interface CartDisplayProps {
  cart: ShoppingCart;
  updateQuantity: (productId: string, newQuantity: number) => void;
}

const CartDisplay = (props: CartDisplayProps) => {
  const { cart, updateQuantity } = props;

  const cartItems = Object.values(cart).map((item, idx) => {
    const product =
      ProductList[
        `${item.productInfo[1].replace('-', '_')}` as keyof ProductListType
      ][item.productInfo[0]];

    return (
      <CartItem
        product={product}
        quantity={item.quantity}
        updateQuantity={updateQuantity}
        key={idx}
      />
    );
  });

  return (
    <div>
      {cartItems.length <= 0 ? (
        <div className='text-neutral-700 text-2xl'>Cart is empty</div>
      ) : (
        <table className='w-full table-auto'>
          <thead>
            <tr className='bg-neutral-200 font-noto-sans-medium text-sm font-bold'>
              <th className='p-4 text-left w-[55%]' colSpan={2}>
                ITEM
              </th>
              <th className='w-[15%]'>PRICE</th>
              <th className='w-[15%]'>QUANTITY</th>
              <th className='w-[15%]'>TOTAL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{cartItems}</tbody>
        </table>
      )}
    </div>
  );
};

export default CartDisplay;
