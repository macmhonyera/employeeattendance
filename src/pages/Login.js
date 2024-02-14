import React from "react";
import Auth from "../layout/auth/Auth";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Auth title="Login">
      <form className="max-w-[450px] w-full mx-auto bg-gray-100 p-2 px-8 rounded-lg font-sans">
        <div>
          <input
            type="email"
            name="email"
            placeholder="  Email here..."
            className="w-full my-5 py-2 bg-[#c7cdd8] shadow-black text-semibold rounded-lg text-white"
            id="email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="  ************"
            className="w-full my-5 py-2 bg-[#c7cdd8] shadow-black text-semibold rounded-lg text-white"
            id="password"
          />
        </div>
        <div className="flex justify-end text-gray-900 py-2 space-x-10">
          <Link
            to="#"
            className="underline hover:decoration-solid text-[#c67640]"
          >
            Forgot Password?
          </Link>
        </div>
        {/* <button
          className="w-full my-5 py-2 bg-[#d1703c] shadow-black text-semibold rounded-lg text-white"
          type="submit"
        >
          Login
        </button> */}
        <Link to="/dashboard">
          <button
            className="w-full my-5 py-2 bg-[#d1703c] shadow-black text-semibold rounded-lg text-white"
            type="submit"
          >
            Login
          </button>
        </Link>
      </form>
    </Auth>
  );
};

export default Login;
