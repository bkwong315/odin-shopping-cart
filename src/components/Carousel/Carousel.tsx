import React, { useState } from 'react';

import CarouselItem from './CarouselItem';

const Carousel = () => {
  const carouselItemData = [
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

  const [currIdx, setCurrIdx] = useState(0);
  const prevIdx = currIdx - 1 < 0 ? carouselItemData.length - 1 : currIdx - 1;
  const nextIdx = currIdx + 1 >= carouselItemData.length ? 0 : currIdx + 1;

  return (
    <div className='relative bg-black'>
      <div className='absolute w-full h-full'>
        <button className='absolute left-[2%] top-1/2 -translate-y-1/2 z-10'>
          <img
            src='./assets/icons/chevron-left-solid.svg'
            alt='left-chevron'
            className='h-8 hover:brightness-[.25]'
          />
        </button>
        <button className='absolute right-[2%] top-1/2 -translate-y-1/2 z-10'>
          <img
            src='./assets/icons/chevron-right-solid.svg'
            alt='right-chevron'
            className='h-8 hover:brightness-[.25]'
          />
        </button>
        <div className='absolute flex gap-2 bottom-12 left-1/2 -translate-x-1/2 z-10'>
          {carouselItemData.map((item, idx) => {
            return (
              <input
                type='radio'
                name='img_idx'
                key={idx}
                className='w-2.5 h-2.5 rounded appearance-none border-solid border-white border checked:bg-white'
                checked={idx === currIdx}
              />
            );
          })}
        </div>
      </div>
      <div className='relative'>
        <div className='grid grid-flow-col'>
          <CarouselItem data={carouselItemData[prevIdx]} classes={''} />
          <CarouselItem data={carouselItemData[currIdx]} classes={''} />
          <CarouselItem
            data={carouselItemData[nextIdx]}
            classes={'translate-x-full'}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
