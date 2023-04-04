import Product from './Product';

interface ShoppingCart {
  [id: string]: { product: Product; quantity: number };
}

export default ShoppingCart;
