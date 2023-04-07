import React from 'react';

import CarouselItem from './CarouselItem';

const Carousel = () => {
  const carouselItemDetails = [
    {
      imgUrl: './assets/imgs/carousel/ryzen-processors.jpg',
      altText: 'ryzen processors',
      headerText: `The Ultimate Processor for Gaming`,
      description: `Take on the most demanding games with the massive performance boost delivered by AMD Ryzen 7000X3D Series processors with AMD 3D V-Cache technology.`,
      btnText: 'Shop Now',
    },
    {
      imgUrl: './assets/imgs/carousel/amd-bundles.jpg',
      altText: 'amd bundles',
      headerText: `Bundle and Save with AMD Ryzen™ Processors and AMD Radeon™ Graphics Deals!`,
      description: `Get up to $100 in additional savings when you purchase select AMD Ryzen™ Processors and AMD Radeon™ Graphics together!`,
      btnText: 'Learn More',
    },
    {
      imgUrl: './assets/imgs/carousel/last-of-us-bundle.jpg',
      altText: 'last of us bundle',
      headerText: `AMD Radeon™ THE LAST OF US™ Game Bundle`,
      description: `Get THE LAST OF US™ PART I when you buy select AMD Radeon™ RX 7000 and RX 6000 Series graphics cards`,
      btnText: 'Learn More',
    },
    {
      imgUrl: './assets/imgs/carousel/jedi-survivor-bundle.jpg',
      altText: 'jedi survivor bundle',
      headerText: `AMD Ryzen™ 7000 Series Game Bundle`,
      description: `Get STAR WARS Jedi: Survivor™ when you buy select AMD Ryzen™ 7000 Series Processors.`,
      btnText: 'Learn More',
    },
  ];

  return (
    <div className='relative bg-black'>
      <button className='absolute left-[2%] top-1/2 -translate-y-1/2'>
        <img
          src='./assets/icons/chevron-left-solid.svg'
          alt='left-chevron'
          className='h-8 hover:brightness-[.25]'
        />
      </button>
      <button className='absolute right-[2%] top-1/2 -translate-y-1/2'>
        <img
          src='./assets/icons/chevron-right-solid.svg'
          alt='right-chevron'
          className='h-8 hover:brightness-[.25]'
        />
      </button>
      <CarouselItem data={carouselItemDetails[3]} />
    </div>
  );
};

export default Carousel;
