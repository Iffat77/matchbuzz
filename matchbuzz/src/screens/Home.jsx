import React from "react";

const Home = ({ user }) => {
  return (
    <div className="h-screen w-full border border-green-700 bg-[#1b263d] text-slate-300">
      <div className=" h-full border border-red-700 flex justify-center items-center">
      <h1 className=' text-3xl font-bold p-4 text-slate-300'>Welcome to MatchBuzz</h1>
      </div>
    </div>
  );
};

export default Home;
