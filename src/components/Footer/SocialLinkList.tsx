import React from 'react';

import SocialLinkItem from './SocialLinkItem';

const SocialLinkList = () => {
  const linkData = [
    {
      linkUrl: 'https://www.facebook.com/amd',
      imgUrl: './assets/icons/facebook-f.svg',
      altText: 'Facebook Logo',
    },
    {
      linkUrl: 'https://www.twitter.com/amd',
      imgUrl: './assets/icons/twitter.svg',
      altText: 'Twitter Logo',
    },
    {
      linkUrl: 'https://www.instagram.com/amd',
      imgUrl: './assets/icons/instagram.svg',
      altText: 'Instagram Logo',
    },
    {
      linkUrl: 'https://www.linkedin.com/amd',
      imgUrl: './assets/icons/linkedin-in.svg',
      altText: 'LinkedIn Logo',
    },
    {
      linkUrl: 'https://www.youtube.com/amd',
      imgUrl: './assets/icons/youtube.svg',
      altText: 'YouTube Logo',
    },
    {
      linkUrl: 'https://www.amd.com/en/corporate/subscriptions',
      imgUrl: './assets/icons/envelope-solid.svg',
      altText: 'Envelope - Subscriptions',
    },
    {
      linkUrl: 'https://www.twitch.tv/amd',
      imgUrl: './assets/icons/twitch.svg',
      altText: 'Twitch Logo',
    },
  ];

  return (
    <div className='grid place-items-center grid-flow-col auto-cols-fr gap-8'>
      {linkData.map((link, idx) => (
        <SocialLinkItem
          linkUrl={link.linkUrl}
          imgUrl={link.imgUrl}
          altText={link.altText}
          key={idx}
        />
      ))}
    </div>
  );
};

export default SocialLinkList;
