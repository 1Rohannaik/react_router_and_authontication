import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../AuthContaxt";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const { googleSignIn } = UserAuth();

  const handelGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="bg-slate-500 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-black w-96 text-white pt-6 pb-14 rounded-md">
        <p className="mb-4 font-semibold mt-3">Sign Up</p>
        <label className="mr-40 mb-2">enter email</label>
        <input
          type="text"
          placeholder="enter email"
          className="rounded-md h-10 w-60 pl-6 bg-slate-300 focus:outline-none mb-7"
        />
        <label className="mr-32 mb-2">enter password</label>
        <input
          type="password"
          placeholder="enter password"
          className="rounded-md h-10 w-60 pl-6 bg-slate-300 focus:outline-none"
        />

        <button className="bg-blue-500 h-10 px-4 rounded-lg w-60 mt-10 mb-8">
          signup
        </button>
        <GoogleButton  onClick={handelGoogleSignIn}/>
      </div>
    </div>
  );
};

export default Signup;
