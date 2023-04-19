import React from 'react';
import { Link, Location } from 'react-router-dom';

import ProductList from '../../ProductList';

interface NavDisplayProps {
  location: Location;
}

const NavDisplay = (props: NavDisplayProps) => {
  const { location } = props;
  let product;

  if (ProductList.processors[location.pathname.replace('/', '')]) {
    product = ProductList.processors[location.pathname.replace('/', '')];
  } else if (ProductList.graphics_cards[location.pathname.replace('/', '')]) {
    product = ProductList.graphics_cards[location.pathname.replace('/', '')];
  }
  return (
    <div className='text-sm'>
      <Link to='/'>Home</Link> &gt;{' '}
      <Link
        to={
          location.state
            ? location.state.prevPath === '/'
              ? `/${product.product_type}s`
              : location.state.prevPath
            : `/${product.product_type}s`
        }
        className='capitalize'>
        {location.state
          ? location.state.prevPath === '/'
            ? `${product.product_type.replace('-', ' ')}s`
            : location.state.prevPath.replace('/', '').replace('-', ' ')
          : `${product.product_type.replace('-', ' ')}s`}
      </Link>{' '}
      &gt;{' '}
      <Link to={`${location.pathname}`}>
        <span className='text-neutral-500 capitalize'>{product.name}</span>
      </Link>
    </div>
  );
};

export default NavDisplay;
