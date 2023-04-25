import React from 'react';
import GraphicsCard from '../../interfaces/GraphicsCard';
import Processor from '../../interfaces/Processor';

interface CartItemProps {
  product: Processor | GraphicsCard;
  quantity: number;
}

const CartItem = (props: CartItemProps) => {
  const { product, quantity } = props;
  return (
    <div>
      {product.name} {quantity}
    </div>
  );
};

export default CartItem;
