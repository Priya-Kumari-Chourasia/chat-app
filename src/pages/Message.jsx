import React, { useState } from "react";
import arya from "../assets/Rectangle 1092.png";
import thunder from "../assets/Vector.png";
import Group from "../assets/Group.png";
import arro from "../assets/send.png";
import micro from "../assets/microphone-2.png";
//import { auth } from "../firebase";
//import { useAuthState } from "react-firebase-hooks/auth";
const Message = () => {
  const [message, setMessage] = useState("");
  //const [user] = useAuthState(auth);
  return (
    <>
      <div className="h-screen">
        <div className="grid lg:grid-cols-6 h-screen">
          <div className="bg-[#FFFFFF] flex lg:flex-col items-center p-2 lg:justify-center">
            <div className="flex lg:flex-col">
              <img className="lg:w-32" src={arya} />
              <div className="flex flex-col  items-center justify-center">
                <p className="lg:my-2 text-[#69235B]">Arya</p>
                <p className="lg:my-2 text-[#797C7B]">Vedic AI Bot</p>
              </div>
            </div>
            <div>
              <p className="text-[#FBBC04]">
                A/ <span className="text-[#FBDC94]">क</span>
              </p>
            </div>
          </div>
          <div className="bg-[#F8F8FF] col-span-5 p-6">
            <div className="flex  space-x-6 ">
              <div>
                <img className="w-14" src={arya} />
              </div>
              <div className="bg-[#69235B] p-6 my-6 mb-6 rounded-tr-xl rounded-br-xl rounded-bl-xl">
                <p className="text-lg text-[#FFFFFF]">
                  🙏 Namaste!  I’m Arya, your AI Vedic help.  I'm here to
                  provide insights from Vedas for daily life concerns. Whether
                  you seek guidance on mantras, general life advice, or specific
                  Vedic interpretations, I’m here to assist you.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center m-8">
              <div>
                <img src={thunder} />
              </div>
              <p className="text-2xl text-[#69235B]">
                You can ask queries like:
              </p>
            </div>

            <div className="flex flex-col items-center justify-center m-4">
              <div className="bg-[#FBBC04] m-2 p-6 rounded-3xl ">
                <p className="text-xl text-[#69235B]">
                  What is the mantra in Rigveda 10.2.3?
                </p>
              </div>
              <div className="bg-[#FBBC04] m-2 p-6 rounded-3xl">
                <p className="text-xl text-[#69235B]">
                  What are the prescribed Vedic remedies for snake bites?
                </p>
              </div>
              <div className="bg-[#FBBC04] m-2 p-6 rounded-3xl">
                <p className="text-xl text-[#69235B]">
                  Can you tell me the significance of the Gayatri Mantra?
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center m-8">
              <div>
                <img className="w-8" src={Group} />
              </div>
              <div className="mx-2">
                <p className="text-lg text-[#69235B]">
                  Limitation: May struggle with complex queries.
                </p>
              </div>
            </div>

            <div className="flex  space-x-6 mb-12">
              <div>
                <img className="w-14" src={arya} />
              </div>
              <div className="bg-[#69235B] p-6 my-6 mb-10 rounded-tr-xl rounded-br-xl rounded-bl-xl">
                <p className="text-lg text-[#FFFFFF]">
                  Let your curiosity guide you; wishing you blessings and
                  enlightenment 🕉️
                </p>
              </div>
            </div>

            <div className="flex bg-white justify-between p-4 rounded-3xl px-6  shadow-2xl hover: ">
              <div className="p-2 w-full  ">
                <input
                  className=" text-[#A1A1A1] focus:outline-0 w-full"
                  type="text"
                  name=""
                  id=""
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message"
                />
              </div>
              <div className="flex items-center">
                <div className="mx-2">
                  <img className="w-8" src={arro} />
                </div>
                <div>
                  <img className="w-8" src={micro} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Message;
