import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Product } from "./pages/Product";
import { Nav } from './components/Nav';
import { Cart } from "./pages/Cart";
import './App.css';

export const App = () => {
  return (
    <Router>
      <div className="container">
        <Nav />
      </div>
      <main>
        <div className="container">
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </main>
    </Router>
  )
};
