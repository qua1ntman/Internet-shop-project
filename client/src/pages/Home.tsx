import React from "react"
import { useEffect } from "react"


export const Home = () => {
  useEffect(() => { document.title = 'Home', [] })
  return (
    <div className="home">
      <h2>Contact</h2>
      <p>You can contact with us</p>
    </div>
  )
}