import React from "react";

const Ad = () => {
  return (
    <section
      className="bg-green-100 py-16 px-2"
      style={{ backgroundImage: `url('city.jpg')`, backgroundSize: "cover" }}
    >
      <div className="container mx-auto">
        <h3 className="text-xl md:text-3xl font-bold  text-center md:text-left">
          Uber for Business
        </h3>
        <p className="text-xl mt-5">
          Transform the way your company moves and feeds its people.
        </p>
        <button className="btn text-white rounded-3xl px-5 md:px-10 py-1 mt-5">
          see how
        </button>
      </div>
    </section>
  );
};

export default Ad;
