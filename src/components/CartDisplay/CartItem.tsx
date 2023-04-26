import React from 'react';
import GraphicsCard from '../../interfaces/GraphicsCard';
import Processor from '../../interfaces/Processor';

interface CartItemProps {
  product: Processor | GraphicsCard;
  quantity: number;
  updateQuantity: (productId: string, newQuantity: number) => void;
}

const CartItem = (props: CartItemProps) => {
  const { product, quantity, updateQuantity } = props;

  const quantityOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const intQuantity = parseInt(e.currentTarget.value);
    if (intQuantity > 0)
      updateQuantity(product.id, parseInt(e.currentTarget.value));
    else updateQuantity(product.id, 1);
  };

  return (
    <tr className='border-b text-sm'>
      <td className='grid place-items-center py-8'>
        <img
          src={Object.values(product.imgs)[1]}
          alt={`${product.name}`}
          className='w-12 h-12'
        />
      </td>
      <td className='font-noto-san-medium font-bold'>{product.name}</td>
      <td className='text-center text-neutral-500'>
        $
        {product.salePrice
          ? parseFloat(product.salePrice).toFixed(2)
          : parseFloat(product.price).toFixed(2)}
      </td>
      <td className='text-center'>
        <input
          type='number'
          value={quantity}
          min={1}
          onChange={quantityOnChange}
          className='text-center border-neutral-300 border border-x-0 focus-visible:border-x-2 appearance-none w-10'
        />
      </td>
      <td className='text-center text-neutral-500'>
        $
        {`${
          product.salePrice
            ? (parseFloat(product.salePrice) * quantity).toFixed(2)
            : (parseFloat(product.price) * quantity).toFixed(2)
        }`}
      </td>
      <td className='text-center pr-4'>
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
            className='w-6 h-6'>
            <path
              stroke='#000'
              strokeWidth='12'
              d='M 20, 20
                    L 80, 80
                    M 20, 80
                    L 80, 20'
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
