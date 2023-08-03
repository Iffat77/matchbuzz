import React from "react";
import { Link } from "react-router-dom";
import Auth from "../components/Auth";

function Navbar({ user }) {
  return (
    <div className="bg-[#1b263d] text-slate-300 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 ">
      <ul className="flex justify-between items-center h-full">
        <span className="w-1/2 h-full py-6 pl-4 font-semibold text-lg">MatchBuzz</span>
        <div className="flex flex-row  w-1/2 justify-end items-center p-4 space-x-6">
          <li className="">{user?.displayName}</li>
          <li> {user && <Auth />}</li>
        </div>
      </ul>
    </div>

  );
}

export default Navbar;
