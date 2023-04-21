import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Processor from '../interfaces/Processor';
import GraphicsCard from '../interfaces/GraphicsCard';
import NavDisplay from '../components/NavDisplay/NavDisplay';
import DetailsDisplay from '../components/DetailsDisplay/DetailsDisplay';
import ProductList from '../ProductList';
import RelatedItems from '../components/RelatedItems/RelatedItems';

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

  const imgs = Object.values(product.imgs);
  const [selectedImgIdx, setSelectedImgIdx] = useState<number>(1);

  const imgClickHandler = (idx: number) => {
    setSelectedImgIdx(idx);
  };

  return (
    <main className='flex flex-col max-w-[1440px] m-auto px-4 py-7'>
      <NavDisplay location={location} />
      <div className='grid grid-cols-2'>
        <div className='grid grid-cols-[max-content_1fr] place-items-center '>
          <div className='grid gap-[.25rem]'>
            {Object.entries(product.imgs).map((keyValPair, idx) => {
              const [key, img] = [...keyValPair];
              if (key === 'card') return;

              return (
                <div
                  onClick={imgClickHandler.bind(undefined, idx)}
                  className={`grid place-items-center w-24 h-24 p-2 border cursor-pointer ${
                    idx === selectedImgIdx
                      ? 'border-black'
                      : 'hover:border-black'
                  }`}
                  key={idx}>
                  <img src={img} alt={img} className='w-8/12' />
                </div>
              );
            })}
          </div>
          <div>
            <img src={imgs[selectedImgIdx]} alt={product.id} className='' />
          </div>
        </div>
        <div>
          <h2 className='text-4xl font-klavika-medium tracking-wide'>
            {product.name}
          </h2>
          <div>SKU: {product.sku}</div>
          <div className='text-[#525252]'>
            {product.salePrice && <span className='text-sm'>Was: </span>}
            <span
              className={
                product.salePrice ? 'line-through font-bold' : 'font-bold'
              }>
              ${product.price}
            </span>
          </div>
          {product.salePrice && (
            <div>
              <span className='text-sm'>Now:</span>{' '}
              <span className='font-bold'>${product.salePrice}</span>
            </div>
          )}
          <ul>
            {product.details.key_points.map((point, idx) => (
              <li className='list-disc ml-5' key={idx}>
                {point}
              </li>
            ))}
          </ul>
          <div>Maximum Purchase: 1 unit</div>
          <div>
            <p>Quantity:</p>
            <div className='flex w-[8vw]'>
              <button className='flex justify-center items-center p-2 border aspect-square flex-auto basis-2/6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 100 100'
                  className='w-4 h-4'>
                  <path
                    stroke='#000'
                    strokeWidth='12'
                    d='M 0, 50
                  L 100, 50'
                  />
                </svg>
              </button>
              <input
                type='number'
                min={1}
                max={1}
                defaultValue={1}
                className='text-center border border-x-0 focus-visible:border-x-2 appearance-none w-8 basis-2/6'
              />
              <button className='grid place-items-center p-2 border basis-2/6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 100 100'
                  className='w-4 h-4'>
                  <path
                    stroke='#000'
                    strokeWidth='12'
                    d='M 0, 50
                  L 100, 50
                  M 50, 0
                  L 50, 100'
                  />
                </svg>
              </button>
            </div>
            <button className='uppercase px-8 py-3 bg-black text-white font-bold mt-8'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <DetailsDisplay details={product.details} />
      <div>
        <h4 className='uppercase tracking-wide text-4xl font-klavika-medium'>
          Related Products
        </h4>
        <RelatedItems />
      </div>
    </main>
  );
};

export default ProductPage;
