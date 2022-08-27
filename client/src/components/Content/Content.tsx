import React, { useContext } from "react";
import { appContext } from "../../App";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Nav } from "../Nav/Nav";
import "./Content.scss";
import { ToTop } from "../ToTop/ToTop";

export const Content = () => {

  const { backgroundColor } = useContext(appContext);

  return (
    <>
      <Header />
      <div className="container">
        <Nav />
      </div>
      <main style={{ backgroundColor }}>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
      <ToTop />
    </>
  );
};
