import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";
import { ProjectContext } from "./Context";
import {  useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(ProjectContext);
  console.log(state.user);
  return (
    <>
      <div className="header-container justify-between md:flex text-cream bg-white px-10 text-pri1 py-10 shadow-md mb-5 items-center">
        <div>
          <NavLink to={"/"} className="flex items-center justify-center">
            {" "}
            <img src={icon} alt="logo" className="w-20" />{" "}
            <span className="text-2xl ml-5">ACADEMIC SPHERE</span>{" "}
          </NavLink>
        </div>
        <div className="flex text-xl items-center">
          <div className="hover:bg-pri2 hover:text-white p-2 rounded-md">
          <button className="mt-4 mb-2">
          <Link
            to="/about"
            className="block  text-pri1 py-2 px-2 rounded hover:bg-pri1 transition duration-300  text-center"
          >
            About
          </Link>
        </button>
          </div>
          {/* <div>
            <NavLink
              to={"/login"}
              className="hover:bg-pri2 hover:text-white p-2 rounded-md"
            >
              CONTACT
            </NavLink>
          </div> */}
          <div>
            <button
              onClick={() => {
                sessionStorage.removeItem("token"),
                navigate("/")
                window.location.reload();
              }}
              className="hover:text-red-500"
            >
              {state.user ? "LOGOUT" : null}
            </button>
          </div>
          <div className="bg-pri2 text-white p-2 ml-2 rounded-md">
            {state.user ? state.user.user_name : "LOGIN"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
