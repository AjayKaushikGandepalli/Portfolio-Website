import "./FooterStyles.css"
import React from 'react'
import {FaPhone, FaHome, FaLinkedin,FaGithub} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import {SiMaildotru,SiLeetcode} from "react-icons/si"
import {Link} from "react-router-dom"
export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <div className="left">
                <div className="location">
                      <FaHome className="ic" size={20} style={{color:"#fff",marginRight:"2rem"}} />
                      <div>
                          <p>Visakhapatnam,</p>
                          <p>Andhra Pradesh</p>
                      </div>

                </div>
            <div className="phone"><h4>
            <Link to="tel:9391733204">
              <span style={{display:'flex'}}>
            <FaPhone className="ic"  size={20} style={{color:"#fff",marginRight:"2rem"}} />+91-9391733204</span></Link>
                </h4>
            </div>
            <div className="email">
              <h4>
              <NavLink to = "mailto:gandepalliajaykaushik@gmail.com" >
                <span style={{display:'flex'}}><SiMaildotru className="ic"  size={20} style={{color:"#fff",marginRight:"2rem"}} />
              gandepalliajaykaushik@gmail.com</span>
                </NavLink>
                
                </h4>
            </div>
            </div> 
          <div className="right">
            <h4>About Me</h4>
            <p>This is Me , Ajay Kaushik Gandepalli,A Full Stack Web Developer, I enjoy developing websites and designing projects.</p>
            <div className="social">
            <NavLink to = "https://leetcode.com/ajaykaushikgandepalli/" ><SiLeetcode className="ic" size={30} style={{color:"#fff",marginRight:"1rem"}} /></NavLink>
            <NavLink to = "https://github.com/AjayKaushikGandepalli" ><FaGithub className="ic" size={30} style={{color:"#fff",marginRight:"1rem"}} /></NavLink>
            <NavLink to = "https://www.linkedin.com/in/ajay-kaushik-gandepalli/" ><FaLinkedin className="ic" size={30} style={{color:"#fff",marginRight:"1rem"}} /></NavLink>  
            </div>
            </div> 
        </div>
    </div>
  )
}
