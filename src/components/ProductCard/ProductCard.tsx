import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { CartDispatch } from '../../App';

interface ProductCardProps {
  id: string;
  productType: string;
  name: string;
  pageLink: string;
  imgUrl: string;
  imgAlt: string;
  featuredInfo: React.ReactNode;
  price: string;
  inStock: boolean;
  infoLinkUrl?: string;
  salePrice?: string;
}

const ProductCard = (props: ProductCardProps) => {
  const {
    id,
    productType,
    name,
    pageLink,
    imgUrl,
    imgAlt,
    featuredInfo,
    infoLinkUrl,
    price,
    salePrice,
    inStock,
  } = props;

  const location = useLocation();
  const cartDispatch = useContext(CartDispatch);

  return (
    <div
      className={`relative flex flex-col w-[33%] h-full items-center gap-4 border text-center
        text-gray-600 py-4 whitespace-pre-wrap hover:shadow-[0_0_25px_-5px_rgba(0,0,0,.3)] transition-shadow duration-700
        ${
          salePrice &&
          `after:content-["Sale!"] after:absolute after:top-0 after:left-0 after:px-2 
      after:bg-red-500 after:text-white after:font-bold after:text-sm after:rounded-r-sm hover:after:bg-black after:transition-all after:duration-700`
        }`}>
      <Link
        to={pageLink}
        state={{ prevPath: location.pathname }}
        className='w-[70%]'>
        <img src={imgUrl} alt={imgAlt} />
      </Link>
      <div className='grow'>
        <h5 className='font-bold text-black'>{name}</h5>
        <div className='text-sm h-fit'>
          {featuredInfo}{' '}
          {infoLinkUrl && (
            <a href={`https://${infoLinkUrl}`} className='underline'>
              {infoLinkUrl}.
            </a>
          )}
        </div>
      </div>
      <div>
        <p className='text-[#525252]'>
          {salePrice && <span className='text-sm'>Was: </span>}
          <span className={salePrice ? 'line-through font-bold' : 'font-bold'}>
            ${price}
          </span>
        </p>
        {salePrice && (
          <p>
            <span className='text-sm'>Now:</span>{' '}
            <span className='font-bold'>${salePrice}</span>
          </p>
        )}
      </div>
      {inStock ? (
        <button
          onClick={cartDispatch.addToCart.bind(null, id, productType, 1)}
          className='uppercase text-white bg-[#27282b] border border-[#27282b] font-bold w-[90%] py-2 hover:bg-transparent hover:text-black transition-[color,background] duration-500'>
          Add to Cart
        </button>
      ) : (
        <button className='text-[#3c3e42] text-xl bg-transparent font-bold w-[90%] py-2 hover:bg-transparent'>
          Out of stock
        </button>
      )}
    </div>
  );
};

export default ProductCard;

export { ProductCardProps };
