import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/Header/Header';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop />}></Route>
        <Route path='/shop/product/:productId' element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
