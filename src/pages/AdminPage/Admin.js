import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(0);

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetch(`https://hero-rider-server-sable.vercel.app/users?page=${pageNumber}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data.users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pageNumber]);
  console.log(users);

  const handleFilterByName = () => {
    const data = users.filter((item) =>
      item.full_name.toLowerCase().includes(name.toLowerCase())
    );
    setFilterData(data);
  };
  const handleFilterByEmail = () => {
    const data = users.filter((item) =>
      item.email.toLowerCase().includes(email.toLowerCase())
    );
    setFilterData(data);
  };
  const handleFilterByPhone = () => {
    const data = users.filter((item) =>
      item.phone.toLowerCase().includes(phone.toLowerCase())
    );
    setFilterData(data);
  };
  const handleFilterByAge = () => {
    const data = users.filter(
      (item) => item.age >= minAge && item.age <= maxAge
    );
    setFilterData(data);
  };

  const handleNameByKeyDown = (event) => {
    if (event.key === "Enter") {
      handleFilterByName();
    }
  };
  const handleEmailByKeyDown = (event) => {
    if (event.key === "Enter") {
      handleFilterByEmail();
    }
  };
  const handlePhoneByKeyDown = (event) => {
    if (event.key === "Enter") {
      handleFilterByPhone();
    }
  };
  return (
    <section className="my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-slate-300 px-2 md:px-5 py-5 md:py-10 grid grid-cols-1 gap-2 rounded">
            <div className="form-control">
              <div className="input-group">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={handleNameByKeyDown}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleEmailByKeyDown}
                  type="text"
                  placeholder="Search by email"
                  className="input input-bordered w-full"
                />
                <button
                  onClick={handleFilterByEmail}
                  className="btn btn-square"
                >
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyDown={handlePhoneByKeyDown}
                  type="text"
                  placeholder="Search by phone number"
                  className="input input-bordered w-full"
                />
                <button
                  onClick={handleFilterByPhone}
                  className="btn btn-square"
                >
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
                  onChange={(e) => setMinAge(e.target.value)}
                  type="number"
                  placeholder="Min"
                  className="p-3 rounded"
                />
                <input
                  onChange={(e) => setMaxAge(e.target.value)}
                  type="number"
                  placeholder="Max"
                  className="p-3 rounded"
                />
                <button
                  onClick={handleFilterByAge}
                  className="btn w-full col-span-2"
                >
                  Filter by age
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email & Phone</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filterData.length > 0 &&
                    filterData.map((user) => (
                      <UserCard key={user._id} user={user} />
                    ))}
                  {!filterData.length > 0 &&
                    users.map((user) => (
                      <UserCard key={user._id} user={user} />
                    ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-10">
              <div className="btn-group">
                <button
                  onClick={() => setPageNumber(pageNumber - 1)}
                  className="btn"
                >
                  «
                </button>
                <button className="btn">{pageNumber + 1}</button>
                <button
                  onClick={() => setPageNumber(pageNumber + 1)}
                  className={`btn`}
                >
                  »
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
