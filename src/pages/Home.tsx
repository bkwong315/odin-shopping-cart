import React from 'react';

import Carousel from '../components/Carousel/Carousel';
import ShopDisplayLink from '../components/ShopDisplayLink/ShopDisplayLink';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import ProductList from '../ProductList';

const Home = () => {
  return (
    <div className='grid justify-items-center gap-12 w-full max-w-full overflow-auto'>
      <Carousel />
      <div className='flex justify-center gap-8 w-full max-w-[1440px]'>
        <ShopDisplayLink
          imgUrl='./assets/imgs/processor.jpg'
          headerText={'processors'}
          linkUrl='/processors'
          rotationDir='counter-clockwise'
        />
        <ShopDisplayLink
          imgUrl='./assets/imgs/graphics-card.jpg'
          headerText={'graphics cards'}
          linkUrl='/graphics-cards'
          rotationDir='clockwise'
        />
      </div>
      <FeaturedProducts
        data={{
          radeon_rx_7900xt: ProductList.graphics_cards.radeon_rx_7900xt,
          ryzen_9_7950x3d: ProductList.processors.ryzen_9_7950x3d,
          ryzen_9_7900x: ProductList.processors.ryzen_9_7900x,
        }}
      />
    </div>
  );
};

export default Home;
