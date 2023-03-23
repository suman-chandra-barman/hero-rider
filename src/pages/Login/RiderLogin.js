import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const RiderLogin = () => {
  const [loginError, setLoginError] = useState("");
  const { emailLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/profile";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    emailLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successful!");
        setLoginError("");
        navigate(from, { replace: true });
        e.target.reset();
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.message);
      });
  };

  return (
    <section className="container mx-auto mt-8 md:mt-16">
      <div className="md:w-1/3 mx-auto p-2">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5">
          Login as a rider!
        </h2>
        <form onSubmit={handleLogin}>
          <div className=" mx-auto grid grid-cols-1 gap-2">
            <input
              name="email"
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
              required
            />
            <input
              name="password"
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              autoComplete="on"
              required
            />
            <span className="text-red-500">{loginError}</span>

            <button className="btn w-full" type="submit">
              Login
            </button>
          </div>
        </form>
        <div>
          <p className="mt-3">
            Don't, have an account? Please{" "}
            <Link className="text-info" to="/rider-login">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RiderLogin;
