import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(users);

  const handleFilterByName = () => {
    const filteredData = users.filter((user) => {
      const regex = new RegExp(name, "i");
      return regex.test(user.full_name);
    });
    setUsers(filteredData);
  };
  return (
    <section className="my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-slate-300 px-2 md:px-5 py-5 md:py-10 grid grid-cols-1 gap-2 rounded">
            <div className="form-control">
              <div className="input-group">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Search by name"
                  className="input input-bordered w-full"
                />
                <button onClick={handleFilterByName} className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="form-control">
              <div className="input-group">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Search by email"
                  className="input input-bordered w-full"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="form-control">
              <div className="input-group">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Search by phone number"
                  className="input input-bordered w-full"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <p className="w-full text-lg">Filter by age range</p>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="p-3 rounded"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="p-3 rounded"
                />
                <button className="btn w-full col-span-2">Filter by age</button>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Name</th>
                    <th>Email & Phone</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <UserCard key={user._id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
