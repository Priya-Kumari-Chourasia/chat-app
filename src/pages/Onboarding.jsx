import React from "react";
import tower from "../assets/tower.svg";
import wifi from "../assets/wifi.svg";
import Group from "../assets/Group.svg";
import girl from "../assets/cartoon-image-of-indian-girl-doing-namaste 1.png";
import facebook from "../assets/Facebook-f_Logo-Blue-Logo.wine.png";
import apple from "../assets/Apple_Inc.-Logo.wine (1).png";
import google from "../assets/Google_Pay-Logo.wine (1).png";

//import {auth} from '../firebase'
//import { GoogleAuthProvider,signInWithRedirect } from "firebase/auth";

const Onboarding = () => {
    /*
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth,provider)
  }*/
  return (
    <div className="bg-[#69235B]">
    {/*
      <div className=" flex w-full flex-row-reverse p-5 fixed ">
        <img src={tower} />
        <img src={wifi} />
        <img src={Group} />
      </div>
      */}
      
      <div className="w-full  grid grid-cols-1 lg:grid-cols-2 lg:h-screen">

      {/* This div contains two div which is displayed in grid form */}

        <div className=" flex flex-col mx-10 items-center justify-center static">

          <img className="object-cover h-full w-full " src={girl} />

          <div className=" p-4 bottom-0 left-50 items-center justify-center lg:absolute">
            <p className="bg-[#CBCBFF] text-xl px-10 py-2 text-[#69235B]">
            Arya, AI Acharya
            </p>
          </div>

        </div>

        
        <div className="  float-right md:pt-10 px-5">
          <div className=" flex flex-col p-6">
            <p className="text-7xl text-center text-[#FFFFFF] tracking-wide leading-relaxed mb-4">
              Discover the timeless wisdom of
            </p>
            <p className="text-7xl text-center text-[#FFC746]">the Vedas.</p>
          </div>
          <div className="p-4 text-center">
            <p className="text-3xl text-[#FFFFFF] ">
              Sign up and {"  "}
              <span className="text-[#FBBC04]">
                  journey through ancient knowledge with Arya 🌟
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex border-2 border-gray-900 rounded-full m-2">
              <img className="w-50 h-50" src={facebook} alt="facebook" />
            </div>
            <div className="flex border-2 border-gray-900 rounded-full m-2">
              <img src={google} alt="google"  />
            </div>
            <div className="flex border-2 border-gray-900 rounded-full m-2">
              <img src={apple} alt="apple" />
            </div>
          </div>

          <div className="flex items-center px-4">
            <hr className="flex-grow h-px my-8 bg-black border-0" />
            <p className="mx-4 text-xl text-gray-900">OR</p>
            <hr className="flex-grow h-px my-8 bg-black border-0" />
          </div>
          <div className="flex items-center justify-center">
          <a href="/chat-app/SignUp">
          <button className="bg-[#FFC746] text-[#69235B] px-14 py-5 text-3xl rounded-xl m-3 hover:bg-yellow-200">Sign up with mail</button>
          </a>
          </div>
          <div className="flex items-center justify-center m-6">
            <p className="text-2xl text-[#FFFFFF]">Existing account? 
            <a href="/chat-app/SignIn">
            <span className="text-[#FBBC04] hover:text-yellow-200">Log in</span>
            </a>
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
};
export default Onboarding;
