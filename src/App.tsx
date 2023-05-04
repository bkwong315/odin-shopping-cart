import React, { useState, useMemo, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import Header from './components/Header/Header';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './interfaces/ShoppingCart';
import CartPage from './pages/CartPage';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import ProductList from './ProductList';

const CartDispatch = createContext(null);

export { CartDispatch };

const App = () => {
  const [cart, setCart] = useState<ShoppingCart>({});

  const addToCart = (
    productId: string,
    productType: string,
    quantity: number
  ) => {
    setCart(() => {
      const newCart = { ...cart };
      newCart[productId] = {
        productInfo: [productId, `${productType.replace('-', '_')}s`],
        quantity,
      };

      return newCart;
    });
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    setCart(() => {
      const newCart = { ...cart };
      newCart[productId] = {
        ...newCart[productId],
        quantity: newQuantity,
      };
      return newCart;
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(() => {
      // eslint-disable-next-line no-unused-vars
      const { [productId]: removedItem, ...newCart } = { ...cart };
      return newCart;
    });
  };

  const getApi = useMemo(
    () => ({ addToCart, updateQuantity, removeFromCart }),
    [cart]
  );

  return (
    <Router>
      <ScrollToTop />
      <Header cart={cart} />
      <CartDispatch.Provider value={getApi}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/cart'
            element={
              <CartPage
                items={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path='processors'
            element={<ShopPage productList={ProductList.processors} />}></Route>
          <Route
            path='graphics-cards'
            element={
              <ShopPage productList={ProductList.graphics_cards} />
            }></Route>
          <Route
            path='all-products'
            element={
              <ShopPage
                productList={{
                  ...ProductList.graphics_cards,
                  ...ProductList.processors,
                }}
              />
            }></Route>
          <Route
            path='/:productId'
            element={<ProductPage addToCart={addToCart} />}
          />
        </Routes>
      </CartDispatch.Provider>
      <Footer />
    </Router>
  );
};

export default App;
