import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const LearnerRegister = () => {
  const [profileImg, setProfileImg] = useState(" ");
  const [nidImg, setNidImg] = useState(" ");
  const [signUpError, setSignUpError] = useState("");

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/profile";
  const imgApi = process.env.REACT_APP_imageBbApi;

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const full_name = form.full_name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    const age = form.age.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const vehicle_type = form.vehicle_type.value;
    const profile_picture = form.profile_picture.files[0];
    const nid_picture = form.nid_picture.files[0];

    if (password === confirm_password) {
      setSignUpError("");
      const fromData = new FormData();
      // profile picture upload
      fromData.append("image", profile_picture);
      const url = `https://api.imgbb.com/1/upload?key=${imgApi}`;
      fetch(url, {
        method: "POST",
        body: fromData,
      })
        .then((res) => res.json())
        .then((imageData) => {
          console.log(imageData.data.url);
          if (imageData.success) {
            setProfileImg(imageData.data.url);

            // nid picture upload
            fromData.append("image", nid_picture);
            const url = `https://api.imgbb.com/1/upload?key=${imgApi}`;
            fetch(url, {
              method: "POST",
              body: fromData,
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.success) {
                  console.log("profile img", data.data.url);
                  setNidImg(data.data.url);
                  console.log("set img", nidImg);
                  // create user with email and password
                  createUser(email, password)
                    .then((result) => {
                      const user = result.user;
                      console.log(user);
                      setSignUpError("");
                      toast.success("Registration success!");
                      e.target.reset();
                      navigate(from, { replace: true });
                      // update user name and profile photo
                      handleProfileUpdate(full_name)
                        .then(() => {
                          console.log("User name and photo update");
                          const userInfo = {
                            full_name,
                            email,
                            age,
                            address,
                            phone,
                            vehicle_type,
                            role: "learner",
                          };
                          console.log("userinfo", userInfo);
                          storeUserData(userInfo);
                        })
                        .catch((error) => {
                          console.error(error);
                          console.log("user info update error");
                        });
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }
              });
          }
        });
    } else {
      setSignUpError("Password doesn't match");
    }
  };

  const handleProfileUpdate = (full_name) => {
    return updateUserProfile(full_name, profileImg);
  };
  const pic = { profileImg, nidImg };
  console.log("pic", pic);
  const storeUserData = (userinfo) => {
    const { profileImg, nidImg } = pic;
    const userData = { ...userinfo, profileImg, nidImg };
    console.log(userData);
    fetch("https://hero-rider-server-sable.vercel.app/learners", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <section className="container mx-auto mt-8 md:mt-16">
      <div className="md:w-1/2 mx-auto p-2">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5">
          Register as a Driving Learner!
        </h2>
        <form onSubmit={handleRegister}>
          <div className=" mx-auto grid grid-cols-1 gap-2">
            <input
              name="full_name"
              type="text"
              className="input input-bordered w-full"
              placeholder="Full Name"
              required
            />
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
            <input
              name="confirm_password"
              type="password"
              className="input input-bordered w-full"
              placeholder="Confirm password"
              autoComplete="on"
              required
            />
            <input
              name="age"
              type="text"
              className="input input-bordered w-full"
              placeholder="Age"
              required
            />
            <input
              name="address"
              type="text"
              className="input input-bordered w-full"
              placeholder="Address"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full"
              required
            />
            <select
              name="vehicle_type"
              className="select select-bordered w-full text-slate-500"
              required
            >
              <option disabled>Vehicle type?</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>
            <div>
              <label htmlFor="">Profile picture</label>
              <input
                name="profile_picture"
                type="file"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label htmlFor="">NID picture</label>
              <input
                name="nid_picture"
                type="file"
                className="input input-bordered w-full"
              />
            </div>
            <span className="text-red-500">{signUpError}</span>
            <button className="btn w-full" type="submit">
              Register
            </button>
          </div>
        </form>
        <div>
          <p className="mt-3">
            Already, have an account? Please{" "}
            <Link className="text-info" to="/learner-login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearnerRegister;
