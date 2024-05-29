import React from "react";
import Users from "../components/Users";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <>
      <div className="relative ">
        <Sidebar />
        <Users />
      </div>
    </>
  );
}

export default Home;
