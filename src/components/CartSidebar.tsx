import React, { useEffect, useRef } from 'react';

import ShoppingCart from '../interfaces/ShoppingCart';

interface CartSidebarProps {
  items: ShoppingCart;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const CartSidebar = (props: CartSidebarProps) => {
  const { items, isOpen, setIsOpen } = props;
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    container.current.classList.remove('hidden');
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      container.current.classList.add('hidden');
    }, 400);
  };

  return (
    <div
      ref={container}
      className={`fixed w-screen h-screen top-0 left-0 grid place-items-end bg-slate-800 bg-opacity-30 z-10 `}>
      <div
        className={`flex flex-col bg-purple-600 right-0 w-[20%] h-full p-4 text-white font-bold transition-transform ease-in duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={handleClose} className='w-max self-end'>
          Close
        </button>
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
