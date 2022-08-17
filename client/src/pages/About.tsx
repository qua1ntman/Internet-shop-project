import { useEffect } from "react"


export const About = () => {
  useEffect(() => document.title = 'About', [])
  return (
    <div className="about">
      <h2>About</h2>
      <p>We are the company that sales clothes</p>
    </div>
  )

}