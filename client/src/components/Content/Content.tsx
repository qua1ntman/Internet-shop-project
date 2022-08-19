import React, { SetStateAction, useContext } from 'react';
import { appContext } from '../../App';
import { Outlet } from 'react-router-dom'
import { themeBackChanger } from '../../helpers/themeStyleChanger'
// import { Cart } from '../../pages/Cart/Cart'
// import { ErrorPage } from '../../pages/ErrorPage/ErrorPage'
// import { Product } from '../../pages/Product/Product'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Nav } from '../Nav/Nav'
import './Content.scss'
// import { Main } from '../../pages/Main/Main';

export const Content = () => {

  const { theme } = useContext(appContext) as 
    { theme: string; setTheme: React.Dispatch<SetStateAction<string>>; }

  return (
    <>
      <Header />
        <div className='container'>
          <Nav />
        </div>
        <main
          style={themeBackChanger(theme)}
        >
          <div className='container'>
            <Outlet />
          </div>
        </main>
        <Footer />
    </>
  )
};
