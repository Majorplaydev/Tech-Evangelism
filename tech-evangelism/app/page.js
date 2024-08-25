"use client"
import Image from "next/image";
import Bridge from "./Assets/Images/bridge-3.svg"
import About from "./Components/About"


export default function Home() {

  return (
    
      <main className="flex min-h-screen flex-col items-center justify-between bg-[#191B20] ">
        <div className=" flex justify-evenly items-center gap-14 p-28  w-full h-[100vh] ">
          <div className="ml-10 text-color-purple h-full flex  gap-7 flex-col justify-center font-[300] leading-none text-[6rem]">
            <span className=" font-['FKScreamer'] mt-5">
              Bridging 
              <br /> the <br/> digital divide
              <hr className="w-[30rem] h-2 bg-[#CDCBFF]" />
            </span>
          </div>
          <Image  className="" src={Bridge} alt="Bridge"/>
        </div>
        <About />
      </main>
  );
}