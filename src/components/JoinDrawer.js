import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const JoinDrawer = () => {
  return (
    <>
      <input type="checkbox" id="join-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative md:p-10">
          <label
            htmlFor="join-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg md:text-2xl font-bold text-center">
            Please Join!
          </h3>
          <div className="mt-5">
            <label htmlFor="join-modal" className="btn w-full">
              <Link
                to="/rider-register"
                className="active:bg-inherit hover:bg-inherit flex gap-3"
              >
                Join as a rider <FaLongArrowAltRight />
              </Link>
            </label>
            <label htmlFor="join-modal" className="btn mt-2 w-full">
              <Link
                to="/learner-register"
                className="active:bg-inherit hover:bg-inherit flex gap-3"
              >
                Join as a Driving Lesson Learner
                <FaLongArrowAltRight />
              </Link>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinDrawer;
