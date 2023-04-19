import React from 'react';
import { useLocation } from 'react-router-dom';

import Processor from '../interfaces/Processor';
import GraphicsCard from '../interfaces/GraphicsCard';
import NavDisplay from '../components/NavDisplay/NavDisplay';

interface ProductPageProps {
  addToCart: (product: Processor | GraphicsCard) => void;
  productList: {
    [key: string]: Processor | GraphicsCard;
  };
}

const ProductPage = (props: ProductPageProps) => {
  const location = useLocation();

  const { addToCart, productList } = props;

  return (
    <main className='flex max-w-[1440px] m-auto px-4 py-7'>
      <NavDisplay location={location} />
    </main>
  );
};

export default ProductPage;
