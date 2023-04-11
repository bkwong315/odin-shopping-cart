import React from 'react';

interface SocialLinkItemProps {
  linkUrl: string;
  imgUrl: string;
  altText: string;
}

const SocialLinkItem = (props: SocialLinkItemProps) => {
  const { linkUrl, imgUrl, altText } = props;

  return (
    <a
      href={linkUrl}
      className='flex justify-center items-center relative p-2 after:rounded after:content-[""] after:bg-white/[18%] after:absolute after:w-full after:h-[75%] after:left-0 after:top-[50%] after:translate-y-[-50%] after:animate-fade-out hover:after:animate-fade-grow'>
      <img
        src={imgUrl}
        alt={altText}
        width='16px'
        className='w-[1.5rem] max-h-[1.5rem] h-auto grow'
      />
    </a>
  );
};

export default SocialLinkItem;
export { SocialLinkItemProps };
