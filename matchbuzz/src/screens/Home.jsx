import React from "react";
import DailyGames from "../components/DailyGames";

const Home = ({ user }) => {
  return (
    <div className="h-screen w-full mt-20   bg-white ">
        {/* <h1 className='text-3xl font-bold p-4 text-slate-300'>Welcome to MatchBuzz</h1> */}
      <div className=" flex-col md:flex md:flex-row justify-evenly items-center">
        <DailyGames />
        <div className=" h-full w-full md:w-full border-purple-400">
          {/* hello to all */}
        </div>
        {/* <div  className="border h-full w-full border-white" ></div> */}
      </div>
    </div>
  );
};

export default Home;
