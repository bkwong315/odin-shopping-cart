import React from 'react';

import Processor, { isProcessor } from '../../interfaces/Processor';
import GraphicsCard, { isGraphicsCard } from '../../interfaces/GraphicsCard';
import ProductList from '../../ProductList';
import ProductCard from '../ProductCard/ProductCard';

const RelatedProducts = () => {
  const prodList = { ...ProductList.processors, ...ProductList.graphics_cards };
  const prodArr = Object.values(prodList);
  const selectedProducts: (Processor | GraphicsCard)[] = [];

  while (selectedProducts.length < 5) {
    const randIdx = Math.floor(Math.random() * 18);

    if (!selectedProducts.includes(prodArr[randIdx])) {
      selectedProducts.push(prodArr[randIdx]);
    }
  }

  return (
    <div className='grid gap-10 mt-6'>
      {selectedProducts.map((_, containerIdx) => {
        const max_rows = 2;
        if (
          containerIdx % 3 !== 0 ||
          Math.ceil((containerIdx + 1) / 3) > max_rows
        )
          return;
        return (
          <div
            className='flex justify-center gap-8 w-full overflow-x-visible overflow-y-clip'
            key={`container-${containerIdx}`}>
            {selectedProducts.map((product, idx) => {
              if (idx < containerIdx || idx >= containerIdx + 3) return;
              let featuredInfo;
              if (isProcessor(product)) {
                featuredInfo = (
                  <>
                    <div>{`${product.details.key_points.filter((point) =>
                      point.includes('Graphics Model')
                    )}`}</div>
                    <div>{`${product.details.general_specs.data.core_count[0]}: ${product.details.general_specs.data.core_count[1]}`}</div>
                  </>
                );
              } else if (isGraphicsCard(product)) {
                featuredInfo = (
                  <>
                    <div>
                      {`${product.details.gpu.data.compute_units[0]}: ${product.details.gpu.data.compute_units[1]}`}
                    </div>
                    <div>
                      {`${product.details.gpu.data.ray_accelerators[0]}: ${product.details.gpu.data.ray_accelerators[1]}`}
                    </div>
                    <div>
                      {`${product.details.gpu.data.game_freq[0]}: ${product.details.gpu.data.game_freq[1]}`}
                    </div>
                  </>
                );
              }

              return (
                <ProductCard
                  id={product.id}
                  productType={product.product_type}
                  name={product.name}
                  pageLink={`/${product.id}`}
                  imgUrl={Object.values(product.imgs)[0]}
                  imgAlt={product.id}
                  featuredInfo={featuredInfo}
                  price={product.price}
                  salePrice={product.salePrice}
                  inStock={parseInt(product.stock) > 0}
                  key={idx}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RelatedProducts;
