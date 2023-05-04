import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLink from './HeaderLink';
import ShoppingCart from '../../interfaces/ShoppingCart';
import Bundles, { BundleType, BundlesType } from '../../Bundles';
import ProductList, { ProductListType } from '../../ProductList';
import LogoDisplay from '../LogoDisplay/LogoDisplay';

interface HeaderProps {
  cart: ShoppingCart;
}

const Header = (props: HeaderProps) => {
  const { cart } = props;
  const cartArr = Object.values(cart);

  const bundles: Array<BundleType> = [];

  cartArr.forEach((item) => {
    const product =
      ProductList[
        `${item.productInfo[1].replace('-', '_')}` as keyof ProductListType
      ][item.productInfo[0]];

    if (product.bundles) {
      product.bundles.forEach((bundleId: keyof BundlesType) => {
        if (!bundles.includes(Bundles[bundleId]))
          bundles.push(Bundles[bundleId]);
      });
    }
  });

  return (
    <header className='text-white'>
      <div className='w-full bg-black'>
        <div className='flex justify-between max-w-[1440px] m-auto px-4 py-7'>
          <LogoDisplay />
          <div className='flex gap-10'>
            <Link
              data-cart-len={cartArr.length + bundles.length}
              to='/cart'
              className={`relative flex items-center p-2 hover:bg-white/[.15] rounded ${
                cartArr.length + bundles.length > 0
                  ? 'after:content-[attr(data-cart-len)]'
                  : 'after:content-none'
              } after:absolute after:grid after:place-items-center after:w-6 after:h-6 after:top-0 after:right-0 after:text-sm after:rounded-full after:border after:text-white after:translate-x-2/3 after:-translate-y-1/3 after:bg-black after:z-10`}>
              <img
                src='./assets/icons/cart-shopping-solid.svg'
                className={`h-4`}
                alt='shopping cart'
              />
            </Link>
            <div className='flex items-center p-2 hover:bg-white/[.15] rounded'>
              <img
                src='./assets/icons/search.svg'
                className={`h-4`}
                alt='shopping cart'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#1a1a1b]'>
        <div className='flex justify-between max-w-[1440px] px-4 py-7 m-auto'>
          <ul className='flex flex-auto gap-12 font-normal'>
            <HeaderLink linkUrl='/processors' text='Processors' />
            <HeaderLink linkUrl='/graphics-cards' text='Graphics Cards' />
            <HeaderLink linkUrl='/all-products' text='All Products' />
            <HeaderLink linkUrl='/promotions' text='Promotions' />
            <HeaderLink linkUrl='/faq' text='Store Help' />
          </ul>
          <div>
            <Link to={'/'}>Sign In</Link>{' '}
            <span className='text-[gray]'>or</span>{' '}
            <Link to={'/'}>Register</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
