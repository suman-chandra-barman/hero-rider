import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaCommentAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-50 py-8 md:py-16 px-2">
        <div className="footer container mx-auto">
          <div>
            <Link to="/" className="text-3xl font-mono font-extrabold">
              <span className="text-info">Hero</span>Rider
            </Link>
            <p>
              With Hero rider, get everything you love about <br /> rider for a
              more affordable price– save up to <br /> 20% when matched with a
              rider along your route.
            </p>
            <div className="flex gap-3 items-center">
              <span className="bg-white  p-2 text-info hover:bg-info hover:text-white rounded-full">
                <FaPhone />
              </span>
              <p>
                <a href="tel:+4733378901">+47 333 78 901</a>
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-white p-2 text-info hover:bg-info hover:text-white rounded-full">
                <FaCommentAlt />
              </span>
              <p>contact@herorider.com</p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="bg-white p-2 text-info hover:bg-info hover:text-white rounded-full">
                <FaMapMarkerAlt />
              </span>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div>
            <span className="footer-title text-xl">Quick Link</span>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Privacy Policy</Link>
            <Link className="link link-hover">Contact Support</Link>
          </div>
          <div>
            <span className="footer-title text-xl">Support</span>
            <Link className="link link-hover">Online Support</Link>
            <Link className="link link-hover">Free Delivery</Link>
            <Link className="link link-hover">24/7 Service</Link>
            <Link className="link link-hover">Make Call</Link>
          </div>
        </div>
        <div className="footer justify-center mt-10 gap-10 border-t border-black pt-10 items-center">
          <div className="items-center grid-flow-col">
            <p>
              Copyright © 2023 <span> Hero Rider</span> - All right reserved
            </p>
          </div>
          <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
