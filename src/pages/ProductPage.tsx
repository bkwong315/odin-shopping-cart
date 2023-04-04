import React from 'react';
import { useParams } from 'react-router-dom';

import Product from '../interfaces/Product';

interface ProductPageProps {
  addToCart: (product: Product) => void;
  ProductList: { [productId: string]: Product };
}

const ProductPage = (props: ProductPageProps) => {
  const params = useParams();
  const { addToCart, ProductList } = props;

  return (
    <div className='text-center'>
      <h3>{params.productId} Page</h3>
      <button
        onClick={addToCart.bind(null, ProductList[params.productId])}
        className='bg-purple-800 rounded px-4 py-1 text-white font-bold hover:scale-105 transition-all'>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
