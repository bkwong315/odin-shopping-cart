import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import NavDisplay from '../components/NavDisplay/NavDisplay';
import DetailsDisplay from '../components/DetailsDisplay/DetailsDisplay';
import ProductList from '../ProductList';
import RelatedItems from '../components/RelatedItems/RelatedItems';
import GraphicsCard from '../interfaces/GraphicsCard';
import Processor from '../interfaces/Processor';

interface ProductPageProps {
  addToCart: (productId: string, productType: string, quantity: number) => void;
}

const ProductPage = (props: ProductPageProps) => {
  const location = useLocation();

  const { addToCart } = props;

  let product: Processor | GraphicsCard;

  if (ProductList.processors[location.pathname.replace('/', '')]) {
    product = ProductList.processors[location.pathname.replace('/', '')];
  } else if (ProductList.graphics_cards[location.pathname.replace('/', '')]) {
    product = ProductList.graphics_cards[location.pathname.replace('/', '')];
  }

  const [quantity, setQuantity] = useState<number>(1);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const imgs = Object.values(product.imgs);
  const [selectedImgIdx, setSelectedImgIdx] = useState<number>(1);

  const changeQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const imgClickHandler = (idx: number) => {
    setSelectedImgIdx(idx);
  };

  const addItem = () => {
    if (quantity > 1) {
      setErrorMsg('Please enter a valid product quantity.');
      return;
    }

    addToCart(product.id, product.product_type, quantity);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity - 1 > 0) setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <>
      {errorMsg.length > 0 && (
        <div className='absolute grid place-items-center w-full h-full bg-[rgb(100 100 100 / .5)]'></div>
      )}
      <main className='flex flex-col max-w-[1440px] m-auto px-4 py-7'>
        <NavDisplay location={location} />
        <div className='grid grid-cols-2 gap-4 my-12'>
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
              <img
                src={imgs[selectedImgIdx]}
                alt={product.id}
                className='max-w-[320px]'
              />
            </div>
          </div>
          <div className='grid gap-4 text-sm my-4'>
            <h2 className='text-[2.65rem] font-klavika-medium tracking-wide'>
              {product.name}
            </h2>
            <div>SKU: {product.sku}</div>
            <div>
              <div className='text-2xl'>
                {product.salePrice && <span>Was: </span>}
                <span className={product.salePrice ? 'line-through' : ''}>
                  ${product.price}
                </span>
              </div>
              {product.salePrice && (
                <div className='text-2xl'>
                  <span>Now:</span>{' '}
                  <span className='font-bold text-[#525252]'>
                    ${product.salePrice}
                  </span>
                </div>
              )}
            </div>
            <ul className='grid gap-2'>
              {product.details.key_points.map((point, idx) => (
                <li className='list-disc ml-5 text-[#525252]' key={idx}>
                  {point}
                </li>
              ))}
            </ul>
            <div>Maximum Purchase: 1 unit</div>
            <div>
              <p>Quantity:</p>
              <div className='mt-2 flex w-[8vw]'>
                <button
                  onClick={decrementQuantity}
                  className='flex justify-center items-center p-2 border aspect-square basis-2/6'>
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
                  value={quantity}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    changeQuantity(parseInt(e.currentTarget.value))
                  }
                  className='text-center border border-x-0 focus-visible:border-x-2 appearance-none w-8 basis-[30%]'
                />
                <button
                  onClick={incrementQuantity}
                  className='grid place-items-center p-2 border basis-2/6'>
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
              <button
                onClick={addItem}
                className='uppercase px-8 py-3 bg-black text-white font-bold mt-4 text-base'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <DetailsDisplay details={product.details} />
        <div className='mt-14'>
          <h4 className='uppercase tracking-wide text-4xl font-klavika-medium'>
            Related Products
          </h4>
          <RelatedItems />
        </div>
      </main>
    </>
  );
};

export default ProductPage;
