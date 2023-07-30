import React from "react";
import facebook from "../assets/Facebook-f_Logo-Blue-Logo.wine.png";
import apple from "../assets/Apple_Inc.-Logo.wine (1) (1).png";
import google from "../assets/Google_Pay-Logo.wine (1).png";
import { Link } from "react-router-dom";
const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
   // alert("The browser will not reload when the alert box is closed.");
};

  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center p-6 lg:pt-20  lg:w-1/3">
        <p className="text-6xl py-8 text-center">Log in to Mokx</p>
        <div className="flex p-6 items-center justify-center">
          <p className=" flex text-center text-2xl items-center justify-center text-[#69235B]">
            Welcome back! Sign in using your social account or email to continue
            us
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex border-2 border-gray-900 rounded-full m-2">
            <img className="w-50 h-50" src={facebook} alt="" />
          </div>
          <div className="flex border-2 border-[gray-900] rounded-full m-2">
            <img src={google} alt="" />
          </div>
          <div className="flex border-2 border-gray-900 rounded-full m-2">
            <img src={apple} alt="" />
          </div>
        </div>

        <div className="flex items-center px-4">
          <hr className=" h-px my-8 bg-black border-0" />
          <p className="mx-4 text-xl text-gray-900">OR</p>
          <hr className=" h-px my-8 bg-black border-0" />
        </div>
        <form className="w-full" onSubmit={handleSubmit} >
          <div className="mb-4 w-full">
            <label className="block text-xl mb-2 text-[#69235B]">Your email</label>
            <input
              className="border-b-2 block w-full h-12 p-4 border-[#CDD1D0]"
              type="email"
              name=""
              id=""
            />
          </div>
          <div className="mb-10">
            <label className="mb-4 text-xl text-[#69235B]">Password</label>
            <input
              className="border-b-2 block w-full h-12 p-4 border-[#CDD1D0]"
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="flex items-center justify-center mt-8 mb-6 w-full">
          <Link to="/chat-app/SignIn/Message">
          <button className="bg-[#FFC746] text-[#69235B] px-10 text-xl lg:px-20 py-4 lg:text-3xl rounded-xl m-3 w-full hover:text-[#FFC746] hover:bg-[#69235B]">
            Login
          </button>
          </Link>
        </div>
        </form>
        
        <div>
            <p className="text-2xl text-[#FFC746]">Forgot Password?</p>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
