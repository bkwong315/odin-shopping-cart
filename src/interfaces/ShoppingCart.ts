import Processor from './Processor';
import GraphicsCard from './GraphicsCard';

interface ShoppingCart {
  [id: string]: { product: Processor | GraphicsCard; quantity: number };
}

export default ShoppingCart;
