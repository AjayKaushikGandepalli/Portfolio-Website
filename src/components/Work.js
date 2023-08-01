import "./WorkCardStyles.css";
import { WorkCard } from "./WorkCard";
import WorkCardData from "./WorkCardData"
import React from 'react'
import pro1 from "../assets/project1.png"
import { NavLink } from "react-router-dom";
export const Work = () => {
  return (
    <div className="work-container">
        <h1 id="pro-head" className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val,ind)=>{
                return(
                   <WorkCard
                   key = {ind}
                   imgsrc ={val.imgsrc}
                   title={val.title} 
                   text={val.text}
                   view={val.view}
                   />
                )
            })}
        </div>
    </div>
  )
}
