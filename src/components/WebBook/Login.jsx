import React from "react";

const Login = () => {
  return (
    <div className=" flex h-screen">
      <div className="w-1/2 flex justify-center pl-[5%] pr-[5%] flex-col ">
        <h2 className="text-3xl font-bold text-[#e04943] ">
          Login to Unlock Possibilities!
        </h2>
        <p>Welcome back! Please login to your account.</p>
        <form className="flex flex-col">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <div className="flex flex-row gap-5">
            <button type="submit" className="py-3 px-4 bg-[#e04943] text-white">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2 bg-[#E5E5E569] flex items-center justify-center">
        <img src="/Bike.png" alt="Placeholder" />
      </div>
    </div>
  );
};

export default Login;
