import React, { useContext, useNavigate } from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/icon.png";
import { ProjectContext } from "./context";

const Header = () => {
  const { state, dispatch } = useContext(ProjectContext);
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
            ABOUT
          </div>
          <div>
            <NavLink
              to={"/login"}
              className="hover:bg-pri2 hover:text-white p-2 rounded-md"
            >
              CONTACT
            </NavLink>
          </div>
          <div className="bg-pri2 text-white p-2 ml-2 rounded-md hover:bg-pri1 hover:scale-95 transition-all duration-300">
            <button
              onClick={() => {
                sessionStorage.removeItem("token"), window.location.reload();
              }}
            >
              {state.user ? "LOGOUT" : "LOGIN"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
