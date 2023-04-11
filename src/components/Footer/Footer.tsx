import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinkList from './SocialLinkList';

const Footer = () => {
  return (
    <footer className='grid gap-16 bg-black text-white py-16 w-full'>
      <div className='flex justify-between items-center max-w-[1440px] w-full m-auto'>
        <div className='flex items-center gap-8'>
          <Link to='/'>
            <img
              src='./assets/imgs/amd-header-logo.svg'
              className={`h-6`}
              alt='AMD'
            />
          </Link>
          <Link
            to='/shop'
            className='hover:text-sky-300 hover:underline underline-offset-2 font-bold text-lg pl-4 border-solid border-l-[1px] border-[rgba(255,255,255,.4)]'>
            Store
          </Link>
        </div>
        <SocialLinkList />
      </div>
      <div className='flex justify-between items-center max-w-[1440px] w-full m-auto'>
        <div className='flex w-full justify-center'>
          <img src='./assets/imgs/payment-methods/visa.webp' alt='Visa' />
          <img
            src='./assets/imgs/payment-methods/mastercard.webp'
            alt='MasterCard'
          />
          <img
            src='./assets/imgs/payment-methods/amex.webp'
            alt='American Express'
          />
          <img src='./assets/imgs/payment-methods/paypal.webp' alt='Paypal' />
          <img
            src='./assets/imgs/payment-methods/discover.webp'
            alt='Discover'
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
