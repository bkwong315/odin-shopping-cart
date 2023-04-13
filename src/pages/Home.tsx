import React from 'react';

import Carousel from '../components/Carousel/Carousel';
import ShopDisplayLink from '../components/ShopDisplayLink/ShopDisplayLink';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';

const Home = () => {
  const featuredProducts = [
    {
      name: 'AMD Radeon™ RX 7900 XT Graphics',
      imgUrl: './assets/imgs/products/rx-7900xt-1.webp',
      imgAlt: 'RX 7900 XT',
      featuredInfo:
        'THE LAST OF US™ PART I game bundle with purchase. See full offer terms at ',
      infoLinkUrl: 'www.amdrewards.com/terms',
      price: (899.0).toFixed(2),
      salePrice: (849.0).toFixed(2),
    },
    {
      name: 'AMD Ryzen™ 9 7950X3D Processor',
      imgUrl: './assets/imgs/products/ryzen-9-7950x3d-default.webp',
      imgAlt: 'RX 7900 XT',
      featuredInfo: `Graphics Model: Integrated AMD Radeon™ Graphics
      # of CPU Cores: 16`,
      price: (699.0).toFixed(2),
    },
    {
      name: 'AMD Ryzen™ 9 7900X Processor',
      imgUrl: './assets/imgs/products/ryzen-9-7900x-default.webp',
      imgAlt: 'Ryzen 9 7900X',
      featuredInfo:
        'STAR WARS Jedi: Survivor™ game bundle with purchase. See full offer terms at ',
      infoLinkUrl: 'www.amdrewards.com/terms',
      price: (549.0).toFixed(2),
      salePrice: (449.0).toFixed(2),
    },
  ];

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
      <FeaturedProducts data={featuredProducts} />
    </div>
  );
};

export default Home;
