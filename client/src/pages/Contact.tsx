import React from "react"
import { useEffect } from "react"


export const Contact = () => {
  useEffect(() => document.title = 'Contact', [])
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>You can contact with us</p>
    </div>
  )
}