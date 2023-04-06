import React from 'react';

const CarouselItem = () => {
  return (
    <div className='flex gap-4 text-white'>
      <img src='./assets/imgs/carousel/amd-bundles.jpg' alt='amd bundles' />
      <div className='flex flex-col justify-center gap-4 w-[45%] mb-8'>
        <h3 className='font-bold text-4xl'>
          Bundle and Save with AMD Ryzen&trade; Processors and AMD Radeon&trade;
          Graphics Deals!
        </h3>
        <p className='text-sm'>
          Get up to $100 in additional savings when you purchase select AMD
          RyzenTM Processors and AMD Radeon&trade; Graphics Together!
        </p>
        <button className='px-10 py-2 border-solid border-white border w-max font-bold uppercase'>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CarouselItem;
