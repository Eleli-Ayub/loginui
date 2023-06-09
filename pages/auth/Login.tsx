import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
function Login() {
  return (
    <div className="h-screen w-screen px-10 py-10 flex items-center justify-center bg-[#001]">
      <div
        className=" w-[400px] py-10 px-10 bg-gradient-to-b from-white to-black shadow-lg rounded-2xl flex flex-row items-center   
      shadow-white/40 z-100 text-white"
      >
        <section className=" w-full h-full flex flex-col gap-3 items-start justify-center px-5">
          <h1 className=" font-bold text-black text-4xl mb-8">Signup</h1>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="" className=" text-black text-sm font-bold">
              Enter your email
            </label>
            <input
              className=" border-b border-b-black/40 py-1 w-full bg-transparent font-light text-wite/40 px-2 text-sm text-white focus:outline-none focus:border-b-pink-500 focus:border-b  "
              type="text"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col gap-1 w-full ">
            <label className=" text-black text-sm font-bold" htmlFor="">
              Enter password
            </label>
            <input
              className=" border-b border-b-black/40 py-1 w-full bg-transparent font-light text-wite/40 px-2 text-sm text-white focus:outline-none focus:border-b-pink-500 focus:border-b  "
              type="text"
              placeholder="Enter your Email"
            />
          </div>
          <div className=" mt-5 flex flex-col gap-3 items-center justify-center w-full ">
            <button className="border-gray-300 border rounded-lg w-full py-2 bg-black/20 font-serif hover:bg-black/50 duration-500 hover:scale-105 ">
              Sign In
            </button>
            <div className=" flex flex-row w-full items-center justify-center gap-[2px] ">
              <span className=" w-full h-[1px] bg-gray-500"></span>
              <span>or</span>
              <span className=" w-full h-[1px] bg-gray-500"></span>
            </div>
            <button className=" flex flex-row gap-1 items-center justify-center border rounded-lg w-full hover:bg-black/50 hover:scale-105 duration-500 border-gray-400 py-2 bg-transparent">
              <FcGoogle className=" text-lg" />
              <p> Continue with Google</p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
