import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import ListProduct from './Components/ListProduct';
import Product from './Components/Product';
import Error404 from './Components/Error404';
import '../node_modules/bootstrap-scss/bootstrap.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="ListProduct" element={<ListProduct />} />
        <Route path="Product" element={<Product />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
