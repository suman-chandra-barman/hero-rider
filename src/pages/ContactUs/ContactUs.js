import React from "react";
import { FaPhone, FaCommentAlt, FaMapMarkerAlt } from "react-icons/fa";
const ContactUs = () => {
  return (
    <section className=" px-2 py-8 md:py-16">
      <div className="container mx-auto">
        <h2 className="font-semibold text-2xl md:text-4xl my-2 md:my-5 md:w-[80%] mx-auto text-center">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <div
            className="grid gap-2 md:gap-5 md:place-content-center md:w-[40%]"
            data-aos="fade-right"
            data-aos-offset="250"
            data-aos-duration="500"
          >
            <h3 className="text-2xl md:text-4xl font-extrabold">
              We Love To Hear From Our Customers
            </h3>
            <div className="flex gap-3 items-center">
              <span className="bg-white text-xl p-3 text-info hover:bg-info hover:text-white rounded-full">
                <FaPhone />
              </span>
              <p className="text-xl">
                <a href="tel:+4733378901">+47 333 78 901</a>
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-white text-xl p-3 text-info hover:bg-info hover:text-white rounded-full">
                <FaCommentAlt />
              </span>
              <p className="text-xl">contact@herorider.com</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-white text-xl p-3 text-info hover:bg-info hover:text-white rounded-full">
                <FaMapMarkerAlt />
              </span>
              <p className="text-xl">Dhaka, Bangladesh</p>
            </div>
          </div>
          {/* form section  */}
          <div
            className="md:w-[60%]"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="1000"
          >
            <form className="md:grid  md:grid-cols-2 items-center justify-between gap-5">
              <div className="flex flex-col items-start ">
                <input
                  type="text"
                  name="name"
                  className="block p-4 w-full mt-2 border-gray-300 rounded-md border border-1 shadow-sm"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block p-4 border border-1 w-full mt-2 border-gray-300 rounded-md shadow-sm"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="phone"
                  className="block p-4 border border-1 w-full mt-2 border-gray-300 rounded-md shadow-sm"
                  placeholder="Phone number"
                  required
                />
              </div>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="subject"
                  className="block p-4 border border-1 w-full mt-2 border-gray-300 rounded-md shadow-sm"
                  placeholder="Subject"
                  required
                />
              </div>
              <textarea
                className="border col-span-2 h-32 rounded-md p-5 w-full mt-2"
                placeholder="Write Message"
              ></textarea>
              <button className="btn btn-info mt-2 w-full text-white rounded-3xl md:px-10 py-1">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
