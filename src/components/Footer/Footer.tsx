import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinkList from './SocialLinkList';
import FooterLink from './FooterLink';

const Footer = () => {
  return (
    <footer className='grid gap-8 bg-black text-white py-16 w-full mt-12'>
      <div className='flex justify-between items-center max-w-[1440px] px-4 w-full m-auto'>
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
      <div className='flex justify-between items-center max-w-[1440px] px-4 w-full m-auto my-8'>
        <div className='flex gap-1 w-full justify-center'>
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
      <div className='flex gap-2 justify-center items-center max-w-[1440px] px-4 w-full m-auto text-zinc-500'>
        <FooterLink
          linkUrl='/terms-and-conditions'
          external={false}
          text='Terms and Conditions'
        />
        |
        <FooterLink
          linkUrl='https://www.amd.com/en/corporate/copyright'
          external={true}
          text='Terms of Use'
        />
        |
        <FooterLink
          linkUrl='https://www.amd.com/en/corporate/privacy'
          external={true}
          text='Privacy'
        />
        |
        <FooterLink
          linkUrl='https://www.amd.com/en/corporate/cookies'
          external={true}
          text='Cookie Policy'
        />
        |
        <FooterLink
          linkUrl='https://www.amd.com/en/corporate/trademarks'
          external={true}
          text='Trademarks'
        />
        |
        <FooterLink
          linkUrl='https://www.amd.com/system/files/documents/statement-human-trafficking-forced-labor.pdf'
          external={true}
          text='Statement on Forced Labor'
        />
        |
        <FooterLink
          linkUrl='https://www.amd.com/en/corporate/competition'
          external={true}
          text='Fair and Open Competition'
        />
        |
        <FooterLink
          linkUrl='https://www.amd.com/system/files/documents/amd-uk-tax-strategy.pdf'
          external={true}
          text='UK Tax Strategy'
        />
        |
        <button className='text-xs text-zinc-500 transition-[color] duration-[400ms] hover:text-white hover:underline'>
          Cookies Settings
        </button>
      </div>
      <p className='flex justify-center items-center max-w-[1440px] w-full m-auto px-4 text-xs text-zinc-500'>
        © {new Date().getFullYear()} Advanced Micro Devices, Inc
      </p>
    </footer>
  );
};

export default Footer;
