import { ProductListType } from '../ProductList';
import Processor from './Processor';
import GraphicsCard from './GraphicsCard';

interface ShoppingCart {
  [id: string]: {
    productInfo: [
      keyof (ProductListType['processors'] | ProductListType['graphics_cards']),
      Processor['product_type'] | GraphicsCard['product_type']
    ];
    quantity: number;
  };
}

export default ShoppingCart;
