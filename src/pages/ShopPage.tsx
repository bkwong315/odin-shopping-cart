import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

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
  const [startIdx, setStartIdx] = useState(0);

  const sortByFeatured = (
    prod1: Processor | GraphicsCard,
    prod2: Processor | GraphicsCard
  ) => {
    const prod1_price = parseInt(prod1.price);
    const prod2_price = parseInt(prod2.price);

    if (prod1.salePrice && prod2.salePrice) {
      return prod1_price - parseInt(prod1.salePrice) ===
        prod2_price - parseInt(prod2.salePrice)
        ? 0
        : prod1_price - parseInt(prod1.salePrice) <
          prod2_price - parseInt(prod2.salePrice)
        ? 1
        : -1;
    } else if (prod1.salePrice && !prod2.salePrice) {
      return -1;
    } else if (!prod1.salePrice && prod2.salePrice) {
      return 1;
    }
    return prod1_price === prod2_price ? 0 : prod1_price < prod2_price ? 1 : -1;
  };

  const sortByAlphabet = (
    prod1: Processor | GraphicsCard,
    prod2: Processor | GraphicsCard
  ) => prod1.name.localeCompare(prod2.name);

  const sortByDate = (
    prod1: Processor | GraphicsCard,
    prod2: Processor | GraphicsCard
  ) => {
    const dateObjProd1 = parseDateFormat(
      prod1.details.general_specs.data.launch_date[1]
    );
    const dateObjProd2 = parseDateFormat(
      prod2.details.general_specs.data.launch_date[1]
    );

    return dateObjProd1 === dateObjProd2
      ? sortByAlphabet(prod1, prod2) * -1
      : dateObjProd1 < dateObjProd2
      ? 1
      : -1;
  };

  const parseDateFormat = (date: string) => {
    const monthMap: { [key: string]: string } = {
      january: '01',
      feburary: '02',
      march: '03',
      april: '04',
      may: '05',
      june: '06',
      july: '07',
      august: '08',
      september: '09',
      october: '10',
      november: '11',
      december: '12',
    };
    let splitDate;

    if (date.split('/').length > 1) {
      splitDate = date.split('/');
      return new Date(`${splitDate[2]}-${splitDate[0]}-${splitDate[1]}`);
    } else if (date.split(' ').length > 1) {
      splitDate = date.split(' ');
      return new Date(
        `${splitDate[1]}-${monthMap[splitDate[0].toLowerCase()]}-${'01'}`
      );
    }

    return new Date();
  };

  const sortByPrice = (
    prod1: Processor | GraphicsCard,
    prod2: Processor | GraphicsCard
  ) => {
    const prod1_price = parseInt(prod1.price);
    const prod2_price = parseInt(prod2.price);

    if (prod1.salePrice && prod2.salePrice) {
      return parseInt(prod1.salePrice) === parseInt(prod2.salePrice)
        ? 0
        : parseInt(prod1.salePrice) > parseInt(prod2.salePrice)
        ? 1
        : -1;
    } else if (prod1.salePrice && !prod2.salePrice) {
      return parseInt(prod1.salePrice) === prod2_price
        ? 0
        : parseInt(prod1.salePrice) > prod2_price
        ? 1
        : -1;
    } else if (!prod1.salePrice && prod2.salePrice) {
      return prod1_price === parseInt(prod2.salePrice)
        ? 0
        : prod1_price > parseInt(prod2.salePrice)
        ? 1
        : -1;
    }

    return prod1_price === prod2_price ? 0 : prod1_price > prod2_price ? 1 : -1;
  };

  const sortMap: {
    [key: string]: (
      prod1: Processor | GraphicsCard,
      prod2: Processor | GraphicsCard
    ) => number;
  } = {
    featured: sortByFeatured,
    newest: sortByDate,
    alphabet_forward: sortByAlphabet,
    alphabet_backward: (
      prod1: Processor | GraphicsCard,
      prod2: Processor | GraphicsCard
    ) => sortByAlphabet(prod1, prod2) * -1,
    price_ascending: sortByPrice,
    price_descending: (
      prod1: Processor | GraphicsCard,
      prod2: Processor | GraphicsCard
    ) => sortByPrice(prod1, prod2) * -1,
  };

  const handleSelectPage = (idx: number) => {
    setStartIdx((idx - 1) * 9);
  };

  const pageBtns = useMemo(() => {
    return Object.values(productList).reduce((reducer, _, idx) => {
      if (idx % 9 === 0) {
        reducer.push(
          <a href='#main' className='group' key={idx}>
            <button
              className={`flex justify-center items-center p-2 w-8 h-8 rounded text-sm transform-[background-color, color] duration-300 ${
                startIdx === idx
                  ? 'bg-neutral-600 text-white'
                  : 'text-neutral-600 group-hover:bg-neutral-400 group-hover:text-white'
              }`}
              onClick={handleSelectPage.bind(undefined, reducer.length + 1)}
              disabled={startIdx === idx}>
              {reducer.length + 1}
            </button>
          </a>
        );
      }
      return reducer;
    }, []);
  }, [startIdx]);

  const displayedItems: Array<Processor | GraphicsCard> = Object.entries(
    productList
  )
    .reduce((reducer, item) => {
      reducer.push(item[1]);
      return reducer;
    }, [])
    .sort(sortMap[sortMethod])
    .slice(startIdx, startIdx + 9);

  const selectOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortMethod(e.target.value);
  };

  return (
    <main id='main' className='max-w-[1440px] m-auto p-4'>
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
            Displaying {startIdx + 1} -{' '}
            {startIdx + 9 < Object.entries(productList).length
              ? startIdx + 9
              : Object.entries(productList).length}{' '}
            of {Object.entries(productList).length}
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
                <option value='alphabet_forward'>A to Z</option>
                <option value='alphabet_backward'>Z to A</option>
                <option value='price_ascending'>Price: Ascending</option>
                <option value='price_descending'>Price: Descending</option>
              </select>
            </span>
          </div>
        </div>
      </header>
      <div className='grid gap-10 mt-6'>
        {displayedItems.map((_, containerIdx) => {
          const max_rows = Math.ceil(displayedItems.length / 3);
          if (
            containerIdx % 3 !== 0 ||
            Math.ceil((containerIdx + 1) / 3) > max_rows
          )
            return;
          return (
            <div
              className='flex justify-center gap-8 w-full overflow-x-visible overflow-y-clip'
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
          );
        })}
      </div>
      <div className='flex justify-center items-center gap-2 mt-8'>
        {Math.floor(startIdx / 9) !== 0 && (
          <a href='#main'>
            <button
              onClick={() => setStartIdx((prevStartIdx) => prevStartIdx - 9)}>
              &lt; Prev
            </button>
          </a>
        )}
        {pageBtns}
        {Math.floor(startIdx / 9) < pageBtns.length - 1 && (
          <a href='#main'>
            <button
              onClick={() => setStartIdx((prevStartIdx) => prevStartIdx + 9)}>
              Next &gt;
            </button>
          </a>
        )}
      </div>
    </main>
  );
};

export default Shop;
