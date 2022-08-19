import React from "react"
import { Outlet } from "react-router-dom"
import { Nav } from "../Nav/Nav"

export const Content = () => {
  return (
    <>
      <div className="container">
        <Nav />
      </div>
      <div className='container'>
            <Outlet />
      </div>
    </>
  )
}