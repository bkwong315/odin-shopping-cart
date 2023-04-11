import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderLinkProps {
  linkUrl: string;
  text: string;
}

const HeaderLink = (props: HeaderLinkProps) => {
  const { linkUrl, text } = props;
  return (
    <Link
      to={linkUrl}
      className='relative after:content-[""] after:absolute after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:transition-[width] duration-1000'>
      {text}
    </Link>
  );
};

export default HeaderLink;
