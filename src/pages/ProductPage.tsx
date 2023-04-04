import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const params = useParams();

  return (
    <div className='text-center'>
      <h3>{params.productId} Page</h3>
      <button className='bg-purple-800 rounded px-4 py-1 text-white font-bold hover:scale-105 transition-all'>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
