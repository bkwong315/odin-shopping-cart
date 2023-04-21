interface ShoppingCart {
  [id: string]: { productInfo: [string, string]; quantity: number };
}

export default ShoppingCart;
