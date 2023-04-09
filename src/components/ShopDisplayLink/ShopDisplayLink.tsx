import React from 'react';
import { Link } from 'react-router-dom';

interface ShopDisplayLinkProps {
  imgUrl: string;
  headerText: string;
  linkUrl: string;
  rotationDir: string;
}

const ShopDisplayLink = (props: ShopDisplayLinkProps) => {
  const { imgUrl, headerText, linkUrl, rotationDir } = props;

  return (
    <div className='group relative flex-1 w-full max-w-full overflow-hidden'>
      <img
        src={imgUrl}
        alt='graphics card'
        className={`${
          rotationDir === 'clockwise'
            ? 'group-hover:rotate-[4deg]'
            : 'group-hover:-rotate-[4deg]'
        } w-full max-w-full overflow-hidden group-hover:scale-[1.13] group-hover:grayscale transition-all duration-700`}
      />
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
