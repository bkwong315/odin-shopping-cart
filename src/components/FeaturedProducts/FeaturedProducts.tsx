import React from 'react';
import { Link } from 'react-router-dom';

import ProductCard from '../ProductCard/ProductCard';
import GraphicsCard, { isGraphicsCard } from '../../interfaces/GraphicsCard';
import Processor, { isProcessor } from '../../interfaces/Processor';

interface FeaturedProductsProps {
  data: { [key: string]: Processor | GraphicsCard };
}

const FeaturedProducts = (props: FeaturedProductsProps) => {
  const { data } = props;

  const featuredProducts: Array<Processor | GraphicsCard> = Object.entries(
    data
  ).reduce((reducer, item) => {
    reducer.push(item[1]);
    return reducer;
  }, []);

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
        {featuredProducts.map((item, idx) => {
          let featuredInfo;
          if (isProcessor(item)) {
            featuredInfo = (
              <>
                <div>{`${item.details.key_points.filter((point) =>
                  point.includes('Graphics Model')
                )}`}</div>
                <div>{`${item.details.general_specs.data.core_count[0]}: ${item.details.general_specs.data.core_count[1]}`}</div>
              </>
            );
          } else if (isGraphicsCard(item)) {
            featuredInfo = (
              <>
                <div>
                  {`${item.details.gpu.data.compute_units[0]}: ${item.details.gpu.data.compute_units[1]}`}
                </div>
                <div>
                  {`${item.details.gpu.data.ray_accelerators[0]}: ${item.details.gpu.data.ray_accelerators[1]}`}
                </div>
                <div>
                  {`${item.details.gpu.data.game_freq[0]}: ${item.details.gpu.data.game_freq[1]}`}
                </div>
              </>
            );
          }
          return (
            <ProductCard
              id={item.id}
              productType={item.product_type}
              name={item.name}
              pageLink={`/${item.id}`}
              imgUrl={Object.values(item.imgs)[0]}
              imgAlt={item.id}
              featuredInfo={featuredInfo}
              price={item.price}
              salePrice={item.salePrice}
              inStock={parseInt(item.stock) > 0}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
