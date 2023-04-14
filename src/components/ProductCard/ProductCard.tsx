import React from 'react';

interface ProductCardProps {
  name: string;
  imgUrl: string;
  imgAlt: string;
  featuredInfo: React.ReactNode;
  price: string;
  infoLinkUrl?: string;
  salePrice?: string;
}

const ProductCard = (props: ProductCardProps) => {
  const { name, imgUrl, imgAlt, featuredInfo, infoLinkUrl, price, salePrice } =
    props;
  return (
    <div
      className={`relative flex flex-col items-center gap-4 border text-center
        text-gray-600 py-4 whitespace-pre-wrap hover:shadow-[0_0_25px_-5px_rgba(0,0,0,.3)] transition-shadow duration-700
        ${
          salePrice &&
          `after:content-["Sale!"] after:absolute after:top-0 after:left-0 after:px-2 
      after:bg-red-500 after:text-white after:font-bold after:text-sm after:rounded-r-sm hover:after:bg-black after:transition-all after:duration-700`
        }`}>
      <img src={imgUrl} alt={imgAlt} className='w-[60%]' />
      <div>
        <h5 className='font-bold text-black'>{name}</h5>
        <div className='text-sm'>
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
      <button className='uppercase text-white bg-[#27282b] border border-[#27282b] font-bold w-[90%] py-2 hover:bg-transparent hover:text-black transition-[color,background] duration-500'>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

export { ProductCardProps };
