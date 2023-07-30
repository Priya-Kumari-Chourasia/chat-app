import React, { useState } from "react";
import hand from "../assets/MOkx logo 2.png";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [allentry, setAllEntry] = useState("");

  

  const createAccount = (e) => {
    e.preventDefault();
    const newEntry = {email: email, password: password, confirm: confirm};
    setAllEntry([...allentry,newEntry]);

  }

  return (
    <div className="flex items-center justify-center ">
      <div className=" flex flex-col mt-6 items-center justify-center p-6 lg:w-1/3">
        <img className="w-32" src={hand} />
        <p className="text-4xl pt-4 text-center">Sign up with Email</p>

        <div className="flex p-4 items-center justify-center">
          <p className=" flex text-center text-2xl items-center justify-center text-[#69235B]">
            Welcome back! Sign in using your social account or email to continue
            us
          </p>
        </div>

        <form className="w-full" onSubmit={createAccount}>
          <div className="mb-4 w-full">
            <label className="block text-xl mb-2 text-[#69235B]">
              Your name
            </label>
            <input
              className="border-b-2 block w-full h-12 p-4 border-[#CDD1D0]"
              type="text"
              name=""
              id=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-xl mb-2 text-[#69235B]">
              Your email
            </label>
            <input
              className="border-b-2 block w-full h-12 p-4 border-[#CDD1D0]"
              type="email"
              name=""
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-10">
            <label className="mb-4 text-xl text-[#69235B]">Password</label>
            <input
              className="border-b-2 block w-full h-12 p-4 border-[#CDD1D0]"
              type="password"
              name=""
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-10">
            <label className="mb-4 text-xl text-[#69235B]">
              Confirm Password
            </label>
            <input
              className="border-b-2 block w-full h-12 p-4 border-[#CDD1D0]"
              type="password"
              name=""
              id=""
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center mt-8 mb-6 w-full">
          <Link to="/chat-app/SignUp/Message">
            <button className="bg-[#FFC746] text-[#69235B] px-10 text-xl lg:px-20 py-4 lg:text-3xl rounded-xl m-3 w-full hover:text-[#FFC746] hover:bg-[#69235B]">
              Create an account
            </button> 
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
