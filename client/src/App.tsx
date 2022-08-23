import React, { Context, Dispatch, SetStateAction } from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import './App.scss';
import { Category } from "./pages/Category/Category";
import { Login } from './pages/Login/Login';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { Content } from './components/Content/Content';
// import { Main } from './pages/Main/Main';
import { Register } from './pages/Register/Register';
import { themeTextChanger, themeBackChanger } from './helpers/themeStyleChanger';
import { Store } from './pages/Store/Store';
import { ShoppingCartProvider } from './pages/Basket/ShoppingCartContext';
// import Wraped from './pages/Product/Product';
// import { CartButton } from './pages/Cart/CartButton';

// Контекст для пропсов, в данном случае для useState хука внутри App
export const appContext = React.createContext(Object) as unknown as 
  Context<{ 
    theme: string; 
    setTheme: Dispatch<SetStateAction<string>>; 
    color: string; 
    backgroundColor: string;
  }>

// Установка body backgroundColor в зависимости от темы
document.body.style.backgroundColor = localStorage.getItem('theme') ? localStorage.getItem('theme') === 'light' ? '' : 'black' : ''

export const App = () => {

  // Хук для изменения темы
  const [theme, setTheme] = React.useState<string>(localStorage.getItem('theme') || 'light')
  
  let { color } = themeTextChanger(theme)
  let { backgroundColor } = themeBackChanger(theme)

  return (  
    <ShoppingCartProvider>
      <Router>
      <appContext.Provider 
        value = {{ theme, setTheme, color, backgroundColor }}
      >
        <Routes>
          <Route path='/' element={<Content />}>
            <Route path="main" element={<Store />} />
            <Route path="men" element={<Category />} />
            <Route path="women" element={<Category />} />
            <Route path="children" element={<Category />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes> 
      </appContext.Provider>
    </Router>
    </ShoppingCartProvider>  
      
  )
};
