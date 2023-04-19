import React from 'react';
import { useLocation } from 'react-router-dom';

import Processor from '../interfaces/Processor';
import GraphicsCard from '../interfaces/GraphicsCard';
import NavDisplay from '../components/NavDisplay/NavDisplay';
import ProductList from '../ProductList';

interface ProductPageProps {
  addToCart: (product: Processor | GraphicsCard) => void;
}

const ProductPage = (props: ProductPageProps) => {
  const location = useLocation();

  const { addToCart } = props;

  let product;

  if (ProductList.processors[location.pathname.replace('/', '')]) {
    product = ProductList.processors[location.pathname.replace('/', '')];
  } else if (ProductList.graphics_cards[location.pathname.replace('/', '')]) {
    product = ProductList.graphics_cards[location.pathname.replace('/', '')];
  }

  return (
    <main className='flex flex-col max-w-[1440px] m-auto px-4 py-7'>
      <NavDisplay location={location} />
      <div className='grid grid-cols-2'>
        <div>Gallery</div>
        <div>
          <h2 className='text-4xl font-klavika-medium tracking-wide'>
            {product.name}
          </h2>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
