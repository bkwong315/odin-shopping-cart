import React from 'react';

interface ProductCardProps {
  name: string;
  imgUrl: string;
  imgAlt: string;
  featuredInfo: string;
  price: string;
  infoLinkUrl?: string;
  salePrice?: string;
}

const ProductCard = (props: ProductCardProps) => {
  const { name, imgUrl, imgAlt, featuredInfo, infoLinkUrl, price, salePrice } =
    props;
  return (
    <div
      className={`relative flex flex-col items-center gap-4 border text-center text-gray-600 py-4 
        ${
          salePrice &&
          `after:content-["Sale!"] after:absolute after:top-0 after:left-0 after:px-2 
      after:bg-red-500 after:text-white after:font-bold after:text-sm after:rounded-r-sm`
        }`}>
      <img src={imgUrl} alt={imgAlt} className='w-[60%]' />
      <div>
        <h5 className='font-bold text-black'>{name}</h5>
        <p className='text-sm'>
          {featuredInfo}{' '}
          {infoLinkUrl && (
            <a href={`https://${infoLinkUrl}`} className='underline'>
              {infoLinkUrl}.
            </a>
          )}
        </p>
      </div>
      <div>
        <p className='text-[#525252]'>
          {salePrice && <span className='text-sm'>Was: </span>}
          <span className={salePrice && 'line-through font-bold'}>
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
      <button className='uppercase text-white bg-[#27282b] font-bold w-[90%] py-2'>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

export { ProductCardProps };
