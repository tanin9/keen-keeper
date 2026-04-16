import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { LuClock3 } from "react-icons/lu";
import { VscGraphLine } from "react-icons/vsc";
import { Link,NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            ` font-semibold mr-3  ${isActive ? "text-white bg-forest-green" : " gray"}`
          }
        >
          {" "}
          <RiHome2Line />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            ` font-semibold mr-3 ${isActive ? "text-white bg-forest-green" : "gray"}`
          }
        >
          <LuClock3 />
          Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Stats"}
          className={({ isActive }) =>
            ` font-semibold mr-3 px-4 ${isActive ? "text-white bg-forest-green" : "gray"}`
          }
        >
          <VscGraphLine />
          Stats
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="container mx-auto navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl  ">
            Keen<span className="forest-green">Keeper</span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
