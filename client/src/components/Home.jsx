import React, { useContext, useState } from "react";
import pic from "../assets/login.jpg";
import Login from "./login";
import Footer from "./footer";
import { ProjectContext } from "./context";

function Home() {
  const { state, dispatch } = useContext(ProjectContext);
  return (
    <div className="min-h-[80vh]">
      <div className="text-center text-xl text-pri1 py-10 mb-10 ">
        <h1 className="mb-10 text-3xl">
          Welcome to <b>ACADEMIC SPHERE.</b>
        </h1>
        <p>Please log in below to access your designated dashboard.</p>
      </div>
      <div className="grid grid-cols-2 overflow-hidden max-h-[60vh] shadow-md">
        <div className="left bg-white flex items-center justify-center">
          <img src={pic} alt="picture" className="max-w-[40vw] h-auto" />
        </div>
        <div className="right bg-white p-10 shadow-md items-center">
          <Login />
        </div>
      </div>
      <div className="sticky top-[100%]">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
