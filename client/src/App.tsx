import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import { Category } from "./pages/Category/Category";
import { Content } from "./components/Content/Content";
import { Main } from "./pages/Main/Main";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Content />}>
          <Route path="main" element={<Main />} />
          <Route path="men" element={<Category />} />
          <Route path="women" element={<Category />} />
          <Route path="children" element={<Category />} />
        </Route>
      </Routes>
    </Router>
  )
};
