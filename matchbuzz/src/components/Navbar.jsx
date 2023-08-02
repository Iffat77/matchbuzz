import React from "react";
import { Link } from "react-router-dom";
import Auth from "../components/Auth";

function Navbar({ user }) {
  return (
    <div className="bg-[#1b263d] text-slate-300 ">
      <ul className="flex justify-between items-center h-full">
        <span className="w-1/2 h-full py-6 pl-4 font-semibold text-lg">MatchBuzz</span>
        <div className="flex flex-row  w-1/2 justify-evenly items-center">
          <li className="">{user?.displayName}</li>
          <li> {user && <Auth />}</li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
