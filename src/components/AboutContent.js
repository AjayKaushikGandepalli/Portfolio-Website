import "./AboutContentStyles.css"
import React from 'react'
import {Link} from "react-router-dom";
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.jpg"
export const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>EDUCATION</h1>
            <p><span>B.Tech</span> in CSE :  NIT - Durgapur </p>
               <p> 2020 – 2024 <span1>CGPA</span1> : 8.91</p>
               <p> </p>
               <p><span>Class XII</span> : Narayana Junior College</p>
               <p>March 2020 <span1>CGPA</span1> : 10</p>  
               <p></p>
            <p><span>Class X</span> : SFS High School</p>
                <p>March 2018 <span1>CGPA</span1> : 10</p>
                <p></p>
            <h1>SKILLS</h1>
            <p>• <span>Languages</span> : C, C++, Python</p>
            <p>• <span>Frontend </span>: HTML, CSS, Javascript, Redux</p>   
            <p>• <span>Backend </span>: NodeJS, MongoDB</p>  
            <p>• <span>Frameworks </span>: ReactJS, ExpressJS, Bootstrap, Material UI
            </p>    
            <p>• <span>Soft Skills </span>: Event Management, Content Writing, Time Management</p>
                <p></p>    
            <Link to = "/contact"><button className="btn">Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                {/* <div className="top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="bottom">
                    <img src={React2} className="img" alt="true"/>
                </div> */}
                <h1>COURSEWORK</h1>
            <p>• Data Structures and Algorithms</p>
            <p> • Object Oriented Programming</p>   
            <p> • Operating Systems</p>  
            <p> • Database Management</p>
            <p></p>
            <h1>CERTIFICATIONS</h1>
            <p>• Certified on Web Development course by
                Dr. Angela Yu</p>
                <p>Certificate Link</p>
            <p>• Certified on Programming for Everybody
                (Python) course by University of Michigan
                Certificate Link</p>
            <h1>ACHIEVEMENTS</h1>
            <p>• Selected for National Young
                Environmentalist’s Conference Event by
                National Bal Bhavan at Ahmedabad.</p>
            <p>• Literary Captain in School.</p>
            <p>• Gold Medalist in Cyber Champ Olympiad.</p>    
            <p>• Gold, Silver Medalist in Inter School
                Carrom and Chess Championship.</p>
            </div>
        </div>
    </div>
  )
}
