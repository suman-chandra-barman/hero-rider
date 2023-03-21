import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const JoinDrawer = () => {
  return (
    <div className="drawer drawer-end">
      <input id="join-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here  */}</div>
      <div className="drawer-side">
        <label htmlFor="join-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-full bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <div className="flex justify-center text-xl md:text-2xl font-bold items-center min-h-screen">
            <div className="md:flex justify-center gap-5 relative">
              <li className="underline">
                <Link className="active:bg-inherit hover:bg-inherit">
                  Join as a rider <FaLongArrowAltRight />
                </Link>
              </li>
              <li className="underline">
                <Link className="active:bg-inherit hover:bg-inherit">
                  Join as a Driving Lesson Learner
                  <FaLongArrowAltRight />
                </Link>
              </li>
              <label
                htmlFor="join-drawer"
                className="btn btn-sm btn-circle absolute top-0 md:top-[-100px] right-0"
              >
                ✕
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinDrawer;
