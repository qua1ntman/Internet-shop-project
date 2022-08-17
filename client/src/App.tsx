import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Nav } from './components/Nav';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Routes>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
};