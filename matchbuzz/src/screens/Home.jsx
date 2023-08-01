import React from "react";
import Auth from "../components/Auth";

const Home = ({ user }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>{`Welcome ${user.displayName}`}</p>
      <Auth />
    </div>
  );
};

export default Home;
