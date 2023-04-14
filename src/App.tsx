import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import Header from './components/Header/Header';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './interfaces/ShoppingCart';
import CartPage from './pages/CartPage';
import Footer from './components/Footer/Footer';

import ProductList from './ProductList';
import GraphicsCard from './interfaces/GraphicsCard';
import Processor from './interfaces/Processor';

const App = () => {
  const [cart, setCart] = useState<ShoppingCart>({});

  const addToCart = (product: Processor | GraphicsCard) => {
    setCart(() => {
      const newCart = { ...cart };
      newCart[product.id] = {
        product,
        quantity:
          newCart[product.id] !== undefined
            ? newCart[product.id].quantity + 1
            : 1,
      };

      return newCart;
    });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartPage items={cart} />} />
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
          element={<ShopPage productList={ProductList} />}></Route>
        <Route
          path='/shop/product/:productId'
          element={
            <ProductPage
              productList={{
                ...ProductList.graphics_cards,
                ...ProductList.processors,
              }}
              addToCart={addToCart}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
