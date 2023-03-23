import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("User Logout successful!");
      })
      .catch((error) => console.error(error));
  };
  const items = (
    <>
      <li>
        <Link to="/" className="active:bg-inherit">
          Home
        </Link>
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
        <ul className="p-2 z-[1] bg-blue-50">
          <li>
            <Link className="active:bg-inherit">Rider</Link>
          </li>
          <li>
            <Link className="active:bg-inherit">Driving lessons</Link>
          </li>
        </ul>
      </li>
      {user?.email === "admin@admin.com" && (
        <li>
          <Link to="/admin-panel" className="active:bg-inherit">
            Admin Panel
          </Link>
        </li>
      )}
      <li>
        <Link to="/contact" className="active:bg-inherit">
          Contact Us
        </Link>
      </li>
      {user?.uid && (
        <li>
          <Link to="/profile" className="active:bg-inherit">
            Profile
          </Link>
        </li>
      )}
      {!user?.uid && (
        <>
          <li tabIndex={0}>
            <Link className="active:bg-inherit">
              Join
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
            <ul className="p-2 z-[1] bg-blue-50">
              <li>
                <Link to="/rider-register" className="active:bg-inherit">
                  Rider
                </Link>
              </li>
              <li>
                <Link to="/learner-register" className="active:bg-inherit">
                  Driving learner
                </Link>
              </li>
            </ul>
          </li>
          <li tabIndex={0}>
            <Link className="active:bg-inherit">
              Login
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
            <ul className="p-2 z-[1] bg-blue-50">
              <li>
                <Link to="/rider-login" className="active:bg-inherit">
                  Rider
                </Link>
              </li>
              <li>
                <Link to="/learner-login" className="active:bg-inherit">
                  Driving learner
                </Link>
              </li>
            </ul>
          </li>
        </>
      )}
      {user?.uid && (
        <button onClick={handleLogout} className="btn text-white btn-error">
          Logout
        </button>
      )}
    </>
  );
  return (
    <section>
      <div className="navbar container mx-auto py-7">
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
          <Link to="/" className="text-2xl md:text-3xl font-bold ">
            <span className="text-info">Hero</span> Rider
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
