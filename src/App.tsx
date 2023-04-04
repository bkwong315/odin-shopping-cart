import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './interfaces/Product';
import Header from './components/Header/Header';
import ProductPage from './pages/ProductPage';
import ShoppingCart from './interfaces/ShoppingCart';

const ProductList: { [productId: string]: Product } = {
  product_id_1: {
    id: 'product_id_1',
    name: 'product_1',
    price: 5.0,
  },
  product_id_2: {
    id: 'product_id_2',
    name: 'product_2',
    price: 7.5,
  },
  product_id_3: {
    id: 'product_id_3',
    name: 'product_3',
    price: 10.0,
  },
  product_id_4: {
    id: 'product_id_4',
    name: 'product_4',
    price: 20.0,
  },
};

const App = () => {
  const [cart, setCart] = useState<ShoppingCart>({});

  const addToCart = (product: Product) => {
    setCart(() => {
      const newCart = { ...cart };
      newCart[product.id] = {
        product,
        quantity:
          newCart[product.id] !== undefined
            ? newCart[product.id].quantity + 1
            : 0,
      };

      return newCart;
    });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop />}></Route>
        <Route
          path='/shop/product/:productId'
          element={
            <ProductPage ProductList={ProductList} addToCart={addToCart} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
