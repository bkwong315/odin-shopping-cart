import React from 'react';

import Carousel from '../components/Carousel/Carousel';
import ShopDisplayLink from '../components/ShopDisplayLink/ShopDisplayLink';

const Home = () => {
  return (
    <div className='grid justify-items-center gap-12 w-full max-w-full overflow-auto'>
      <Carousel />
      <div className='flex justify-center gap-8 w-full max-w-[1440px]'>
        <ShopDisplayLink
          imgUrl='./assets/imgs/processor.jpg'
          headerText={'processors'}
          linkUrl='/processors'
        />
        <ShopDisplayLink
          imgUrl='./assets/imgs/graphics-card.jpg'
          headerText={'graphics cards'}
          linkUrl='/graphics-cards'
        />
      </div>
    </div>
  );
};

export default Home;
