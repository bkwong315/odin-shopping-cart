import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

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
  const params = useParams();
  const location = useLocation();

  const { addToCart, productList } = props;

  return (
    <div className='text-center'>
      <NavDisplay location={location} />
      <h3>{params.productId} Page</h3>
      <button
        onClick={addToCart.bind(null, productList[params.productId])}
        className='bg-purple-800 rounded px-4 py-1 text-white font-bold hover:scale-105 transition-all'>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
