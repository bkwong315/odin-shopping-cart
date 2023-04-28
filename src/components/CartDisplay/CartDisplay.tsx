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

  const subTotal = Object.values(cart).reduce((reducer, item) => {
    const product =
      ProductList[
        `${item.productInfo[1].replace('-', '_')}` as keyof ProductListType
      ][item.productInfo[0]];

    return (
      (product.salePrice
        ? parseFloat(product.salePrice)
        : parseFloat(product.price)) *
        item.quantity +
      reducer
    );
  }, 0);

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

  const currencyFormatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return (
    <div>
      {cartItems.length <= 0 ? (
        <div className='text-black text-2xl'>Cart is empty</div>
      ) : (
        <>
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
          <div className='w-[33%] m-[0_0_0_auto] border-neutral-200'>
            <div className='flex justify-between border-b border-inherit w-full py-4'>
              <span>Subtotal:</span>
              <b>{currencyFormatter.format(subTotal)}</b>
            </div>
            <div className='border-b border-inherit w-full py-4'>
              <div>Coupon Code:</div>
              <div className='flex mt-1'>
                <input
                  type='text'
                  placeholder='Enter your coupon code'
                  className='border text-sm px-2 flex-auto'
                />
                <button className='px-4 py-3 bg-neutral-600 text-white font-klavika-medium font-bold text-xs basis-[20%]'>
                  APPLY
                </button>
              </div>
            </div>
            <div className='flex justify-between border-b border-inherit w-full py-5'>
              <span>Grand Total:</span>
              <b>{`${currencyFormatter.format(subTotal)}`}</b>
            </div>
            <div className='flex gap-4 font-noto-sans-medium font-bold text-sm py-5 border-inherit'>
              <button className='relative text-black border px-4 py-3 flex-auto border-black after:absolute after:opacity-0 after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:bg-white/50 after:hover:opacity-100 after:transition-opacity after:duration-500'>
                CONTINUE SHOPPING
              </button>
              <button className='relative bg-black text-white px-4 py-3 flex-auto after:absolute after:opacity-0 after:content-[""] after:w-full after:h-full after:top-0 after:left-0 after:bg-white/50 after:hover:opacity-100 after:transition-opacity after:duration-500'>
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className='text-end'>-- or use --</div>
            <button className='relative grid place-items-center m-[.5rem_0_0_auto] bg-[#ffc439] px-4 py-3 rounded w-1/2'>
              <img
                src='./assets/icons/paypal_checkout_btn.svg'
                alt='PayPal'
                className='w-16'
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDisplay;
