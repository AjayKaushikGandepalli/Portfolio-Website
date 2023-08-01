import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"
import "./HeroimgStyles.css"
export const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-img" 
          src={IntroImg} alt="IntroImg"/> 
        </div>
        <div className = "content">
        <p>Hi, I'm  G.Ajay Kaushik</p>
        <h1>Full-Stack Developer</h1>
         <div>
            <Link to = "/projects" className="btn">Projects</Link>
            <Link to = "/contact" className="btn btn-light">Contact</Link>
         </div>
        </div>
    </div>
  )
}
