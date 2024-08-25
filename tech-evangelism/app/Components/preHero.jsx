"use client"
import React from 'react'
import {getRandomColor} from "../Utils/colorUtils"
import { useEffect, useState } from "react";


const preHero = () => {
    
  const [bgColor, setBgColor] = useState("");

  useEffect(()=>{
    const color = getRandomColor();
    setBgColor(color);
  }, []);

  const bgStyle = { backgroundColor: bgColor };

  return (
    <div  style={bgStyle} className=" w-full h-[100vh]">
        <div className=" center justify-end items-center flex flex-col h-full">
          <div className=''>
            <span className="section-heading">spreading the digital and tech gospel</span>
          </div>
          <div className=''>
            <span className=" font-['FkScreamer'] text-color-purple font-[400] leading-normal text-[13rem] ">Tech Evangelism</span>
          </div>
        </div>
    </div>
  )
}

export default preHero