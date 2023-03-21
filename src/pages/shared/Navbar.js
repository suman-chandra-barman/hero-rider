import React, { useState } from "react";
import { Link } from "react-router-dom";
import JoinDrawer from "../../components/JoinDrawer";
import LoginDrawer from "../../components/LoginDrawer";

const Navbar = () => {
  const [loginDrawer, setLoginDrawer] = useState(true);
  const [joinDrawer, setJoinDrawer] = useState(true);

  console.log(loginDrawer, joinDrawer);
  const items = (
    <>
      <li>
        <Link className="active:bg-inherit">Home</Link>
      </li>
      <li tabIndex={0}>
        <Link className="active:bg-inherit">
          Services
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link>
        <ul className="p-2">
          <li>
            <Link className="active:bg-inherit">Rider</Link>
          </li>
          <li>
            <Link className="active:bg-inherit">Driving lessons</Link>
          </li>
        </ul>
      </li>
      <li>
        <label
          onClick={() => {
            setLoginDrawer(false);
            setJoinDrawer(true);
          }}
          htmlFor="join-drawer"
          className="drawer-button active:bg-inherit"
        >
          Join
        </label>
      </li>
      <li>
        <label
          onClick={() => {
            setJoinDrawer(false);
            setLoginDrawer(true);
          }}
          htmlFor="login-drawer"
          className="drawer-button active:bg-inherit"
        >
          Login
        </label>
      </li>
    </>
  );
  return (
    <section>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {items}
            </ul>
          </div>
          <Link className="text-2xl font-bold">Hero Rider</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
      </div>
      <div className={`${loginDrawer ? "block" : "hidden"}`}>
        <LoginDrawer />
      </div>
      <div className={`${joinDrawer ? "block" : "hidden"}`}>
        <JoinDrawer />
      </div>
    </section>
  );
};

export default Navbar;
