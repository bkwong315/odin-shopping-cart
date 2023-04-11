import React from 'react';
import { Link } from 'react-router-dom';

import ProductCard, { ProductCardProps } from '../ProductCard/ProductCard';

interface FeaturedProductsProps {
  data: ProductCardProps[];
}

const FeaturedProducts = (props: FeaturedProductsProps) => {
  const { data } = props;

  return (
    <div className='flex flex-col justify-center gap-8 w-full max-w-[1440px] px-4'>
      <header className='flex justify-between items-center w-full'>
        <h3 className='uppercase tracking-wide font-klavika-medium text-4xl'>
          Featured Products
        </h3>
        <Link
          className='uppercase text-sm underline text-gray-600 hover:text-gray-900 transition-[color] duration-500'
          to={'/shop'}>
          View All Products
        </Link>
      </header>
      <div className='flex gap-8 overflow-hidden'>
        {data.map((product, idx) => {
          return (
            <ProductCard
              name={product.name}
              imgUrl={product.imgUrl}
              imgAlt={product.imgAlt}
              featuredInfo={product.featuredInfo}
              infoLinkUrl={product.infoLinkUrl}
              price={product.price}
              salePrice={product.salePrice}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
