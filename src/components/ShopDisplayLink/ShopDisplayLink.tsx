import React from 'react';
import { Link } from 'react-router-dom';

interface ShopDisplayLinkProps {
  imgUrl: string;
  headerText: string;
  linkUrl: string;
}

const ShopDisplayLink = (props: ShopDisplayLinkProps) => {
  const { imgUrl, headerText, linkUrl } = props;

  return (
    <div className='relative flex-1'>
      <img src={imgUrl} alt='graphics card' className='w-full' />
      <div className='absolute grid place-items-center w-full h-full top-0 text-white'>
        <div className='grid gap-2 place-items-center'>
          <header className='uppercase font-klavika-medium text-3xl'>
            {headerText}
          </header>
          <Link
            className='uppercase border px-4 py-2 max-w-max font-bold'
            to={linkUrl}>
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopDisplayLink;
