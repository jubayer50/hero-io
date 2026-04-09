import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import Logo from "../../assets/logo.png";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `  ${isActive ? "lg:border-b-2 rounded-none border-[#632EE3] bg-linear-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""} font-semibold`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Apps"}
          className={({ isActive }) =>
            `  ${isActive ? "lg:border-b-2 rounded-none border-[#632EE3] bg-linear-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""} font-semibold`
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Installation"}
          className={({ isActive }) =>
            `  ${isActive ? "lg:border-b-2 rounded-none border-[#632EE3] bg-linear-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : ""} font-semibold`
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar max-w-360 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100  z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link to={"/"} className="flex items-center gap-2 ">
            <img className="max-w-10" src={Logo} alt="" />
            <h2 className="bg-linear-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-lg font-bold">
              HERO.IO
            </h2>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4">{links}</ul>
        </div>

        <div className="navbar-end">
          <a className="btn bg-linear-to-b from-[#632EE3] to-[#9F62F2] text-white font-semibold flex items-center gap-2.5">
            <FaGithub className="text-2xl"></FaGithub> Contribute
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
NavBar;
