import React, { Context, Dispatch, SetStateAction } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Product } from "./pages/Product/Product";
import { Nav } from './components/Nav/Nav';
import { Cart } from "./pages/Cart/Cart";
import './App.scss';
import { Header } from './components/Header/Header';
import { Footer } from "./components/Footer/Footer";
import { themeBackChanger } from "./helpers/themeStyleChanger";

export const appContext = React.createContext(Object) as unknown as 
Context<{ theme: string; setTheme: Dispatch<SetStateAction<string>>; }>


export const App = () => {

  const [theme, setTheme] = React.useState<string>(localStorage.getItem('theme') || 'light')



  return (
    <Router>
      <appContext.Provider value = {{ theme, setTheme }}>
      <Header />
      <div className="container">
        <Nav />
      </div>
      <main
        style={themeBackChanger(theme)}
      >
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </main>
      <Footer />
      </appContext.Provider>
    </Router>
  )
};
