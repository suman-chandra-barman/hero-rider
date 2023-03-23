import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero md:min-h-screen"
      style={{
        backgroundImage: `url(${"rider-banner.jpg"})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content py-16">
        <div className="w-full">
          <h3 className="text-lg font-bold md:text-2xl text-info">
            NEED TO GET AROUND?
          </h3>
          <h1 className="my-4 md:my-6 md:mb-5 text-3xl md:text-6xl font-bold w-full md:w-[70%]">
            Professional drivers, fair fares.
          </h1>
          <p className="mb-4 md:mb-6  text-lg md:text-3xl">
            We've built tools to provide the ultimate flexibility <br /> for
            driver and riders.
          </p>
          <div>
            <Link to="/rider-login">
              <button className="btn btn-info text-white mr-1 md:mr-5 rounded-3xl md:px-10 py-1">
                Driver
              </button>
            </Link>
            <Link to="/learner-login">
              <button className="btn mt-5 md:mt-0 bg-white hover:bg-white rounded-3xl md:px-10 py-1 text-black">
                Driving learner
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
