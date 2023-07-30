import React from "react";

import logo from "../assets/logo.png";
import veda from "../assets/Back to Vedas 🕉️.png";
import Group from "../assets/Group.svg";
import tower from "../assets/tower.svg";
import wifi from "../assets/wifi.svg";
import { Link } from "react-router-dom";
//import "./Splash.css";

const Splash = () => {
  return (
    //This is the home page of website
    
    <div className=" flex flex-col max-h-screen ">
      {/*
      <div className=" flex w-full flex-row-reverse p-5 fixed">
        <img src={tower} />
        <img src={wifi} />
        <img src={Group} />
      </div>
      */}
      <div className=" flex flex-col h-screen flex-grow  justify-center  items-center ">
    
        <div className="md:w-60  border-sky-500 justify-center  items-center mb-24">
          <img className=" md:w-60 object-fill" src={logo} />
        </div>

        <Link to ="/chat-app/Onboarding">
        <button className=" top-132  md:w-60 justify-center  items-center hover:bg-gray-200 p-4 rounded-full">
         
            <img className=" md:w-60 object-fill " src={veda} />
         
        </button>
        </Link>

      </div>
    </div>
  );
};
export default Splash;
