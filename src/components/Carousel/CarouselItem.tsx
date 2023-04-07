import React from 'react';

interface CarouselItemProps {
  data: {
    imgUrl: string;
    altText: string;
    headerText: string;
    description: string;
    btnText: string;
  };
}

const CarouselItem = (props: CarouselItemProps) => {
  const { imgUrl, altText, headerText, description, btnText } = props.data;

  return (
    <div className='flex gap-4 text-white'>
      <img src={imgUrl} alt={altText} />
      <div className='flex flex-col justify-center gap-4 w-[45%] mb-8'>
        <h3 className='font-bold text-4xl'>{headerText}</h3>
        <p className='text-sm'>{description}</p>
        <button className='px-10 py-2 border-solid border-white border w-max font-bold uppercase hover:bg-white/[.15]'>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default CarouselItem;
