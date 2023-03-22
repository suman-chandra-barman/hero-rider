import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const RiderRegister = () => {
  const [profileImg, setProfileImg] = useState("");
  const [nidImg, setNidImg] = useState("");
  const [licenseImg, setLicenseImg] = useState("");
  const [signUpError, setSignUpError] = useState("");

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

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
    const area = form.area.value;
    const vehicle_name = form.vehicle_name.value;
    const vehicle_model = form.vehicle_model.value;
    const vehicle_palate = form.vehicle_palate.value;
    const vehicle_type = form.vehicle_type.value;

    const profile_picture = form.profile_picture.files[0];
    const nid_picture = form.nid_picture.files[0];
    const license_picture = form.license_picture.files[0];

    console.log(
      full_name,
      email,
      password,
      confirm_password,
      age,
      address,
      phone,
      area,
      vehicle_name,
      vehicle_model,
      vehicle_palate,
      vehicle_type,
      profile_picture,
      nid_picture,
      license_picture
    );
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
          setProfileImg(imageData.data.url);
          if (imageData.success) {
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
                  console.log(data.data.url);
                  setNidImg(data.data.url);
                  // license picture upload
                  fromData.append("image", license_picture);
                  const url = `https://api.imgbb.com/1/upload?key=${imgApi}`;
                  fetch(url, {
                    method: "POST",
                    body: fromData,
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.success) {
                        console.log(data.data.url);
                        setLicenseImg(data.data.url);

                        // create user with email and password
                        createUser(email, password)
                          .then((result) => {
                            const user = result.user;
                            console.log(user);
                            setSignUpError("");
                            // e.target.reset();

                            // update user name and profile photo
                            updateUserProfile(full_name, profileImg)
                              .then(() => {
                                console.log("User name and photo update");

                                const userInfo = {
                                  full_name,
                                  email,
                                  age,
                                  address,
                                  phone,
                                  area,
                                  vehicle_name,
                                  vehicle_model,
                                  vehicle_palate,
                                  vehicle_type,
                                  profileImg,
                                  licenseImg,
                                  nidImg,
                                };
                                storeUserData(userInfo);
                              })
                              .catch((error) => {
                                console.error(error);
                                console.log("user update error");
                              });
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      }
                    });
                }
              });
          }
        });
    } else {
      setSignUpError("Password doesn't match");
    }
  };

  const storeUserData = (userinfo) => {
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userinfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          // navigate(from, { replace: true });
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <section className="container mx-auto mt-8 md:mt-16">
      <div className="md:w-1/2 mx-auto p-2">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-5">
          Register as a rider!
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
            <input
              name="area"
              type="text"
              placeholder="Area"
              className="input input-bordered w-full"
              required
            />
            <input
              name="vehicle_name"
              type="text"
              placeholder="Vehicle name"
              className="input input-bordered w-full"
              required
            />
            <input
              name="vehicle_model"
              type="text"
              placeholder="Vehicle model"
              className="input input-bordered w-full"
              required
            />
            <input
              name="vehicle_palate"
              type="text"
              placeholder="Vehicle palate"
              className="input input-bordered w-full"
              required
            />
            <select
              name="vehicle_type"
              className="select select-bordered w-full text-slate-500"
              required
            >
              <option disabled value>
                Vehicle type?
              </option>
              <option defaultValue="car">Car</option>
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
            <div>
              <label htmlFor="">Driving license picture</label>
              <input
                name="license_picture"
                type="file"
                className="input input-bordered w-full"
              />
            </div>

            <button className="btn w-full" type="submit">
              Register
            </button>
          </div>
        </form>
        <div>
          <p className="mt-3">
            Already, have an account? Please{" "}
            <Link className="text-info" to="/rider-login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RiderRegister;
