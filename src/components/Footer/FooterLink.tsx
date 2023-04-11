import React from 'react';

import { Link } from 'react-router-dom';

interface FooterLinkProps {
  linkUrl: string;
  external: boolean;
  text: string;
}

const FooterLink = (props: FooterLinkProps) => {
  const { linkUrl, external, text } = props;

  const style = `text-xs text-zinc-500 transition-[color] duration-[400ms] hover:text-white hover:underline`;

  return (
    <>
      {external ? (
        <a href={linkUrl} target='_blank' className={style} rel='noreferrer'>
          {text}
        </a>
      ) : (
        <Link to={linkUrl} className={style}>
          {text}
        </Link>
      )}
    </>
  );
};

export default FooterLink;
