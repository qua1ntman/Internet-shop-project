import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Product } from "./pages/Product/Product";
import { Nav } from './components/Nav/Nav';
import { Cart } from "./pages/Cart/Cart";
import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Nav />
      </div>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  )
};
