import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Processor, { isProcessor } from '../interfaces/Processor';
import GraphicsCard, { isGraphicsCard } from '../interfaces/GraphicsCard';
import ProductCard from '../components/ProductCard/ProductCard';

interface ShopProps {
  productList:
    | { [key: string]: Processor | GraphicsCard }
    | {
        graphics_cards: { [key: string]: GraphicsCard };
        processors: { [key: string]: Processor };
      };
}

const Shop = (props: ShopProps) => {
  const location = useLocation();

  const { productList } = props;
  const [sortMethod, setSortMethod] = useState('featured');
  const startIdx = 0;

  const displayedItems: Array<Processor | GraphicsCard> = Object.entries(
    productList
  )
    .slice(startIdx, startIdx + 9)
    .reduce((reducer, item) => {
      reducer.push(item[1]);
      return reducer;
    }, []);

  const selectOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortMethod(e.target.value);
  };

  return (
    <main className='max-w-[1440px] m-auto p-4'>
      <header className='text-sm'>
        <div className='grid gap-3'>
          <div className=''>
            Home &gt;{' '}
            <span className='text-neutral-500 capitalize'>
              {location.pathname.replace('/', '').replace('-', ' ')}
            </span>
          </div>
          <h3 className='uppercase text-4xl font-klavika-medium'>
            {location.pathname.replace('/', '').replace('-', ' ')}
          </h3>
        </div>
        <div className='flex justify-between items-center w-full mt-12'>
          <div>
            Displaying 1 - {Object.entries(productList).length} of{' '}
            {Object.entries(productList).length}
          </div>
          <div className='flex items-center gap-2'>
            <span className='font-noto-sans-medium font-medium'>Sort by:</span>
            <span className='relative after:content-[""] after:w-4 after:h-2 after:scale-75 after:top-1/2 after:-translate-y-1/2 after:right-2 after:bg-neutral-600 after:select-triangle after:absolute'>
              <select
                name='sort-by-selector'
                id='sort-by-selector'
                value={sortMethod}
                onChange={selectOnChangeHandler}
                className='appearance-none pl-2 pr-24 py-2 bg-transparent border border-neutral-300 focus-visible:outline-none'>
                <option value='featured'>Featured Items</option>
                <option value='newest'>Newest Items</option>
                <option value='alphabetical'>A to Z</option>
                <option value='reverseAlphabetical'>Z to A</option>
                <option value='priceAscending'>Price: Ascending</option>
                <option value='priceDescending'>Price: Descending</option>
              </select>
            </span>
          </div>
        </div>
      </header>
      <div className='grid grid-rows-3 gap-10 mt-6'>
        {displayedItems.map((_, containerIdx) => {
          if (containerIdx % 3 !== 0) return;
          return (
            <div
              className='grid grid-flow-col grid-cols-3 gap-8 overflow-x-visible overflow-y-clip'
              key={`container-${containerIdx}`}>
              {displayedItems.map((item, idx) => {
                if (idx < containerIdx || idx >= containerIdx + 3) return;
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
                    name={item.name}
                    imgUrl={Object.values(item.imgs)[0]}
                    imgAlt={item.id}
                    featuredInfo={featuredInfo}
                    price={item.price}
                    salePrice={item.salePrice}
                    key={idx}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Shop;
