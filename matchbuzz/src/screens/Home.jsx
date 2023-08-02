import React from "react";


const Home = ({ user }) => {
  return (
    <div className="h-screen w-full border border-green-700 bg-[#1b263d] text-slate-300">
      <div className="border h-full border-red-700 flex justify-center">
      <h3 className="text-3xl font-bold p-4">{`Welcome To Matchbuzz`}</h3>

      </div>
    </div>
  );
};

export default Home;
