import React from "react";

const UserCard = ({ user }) => {
  const { full_name, age, email, address, profileImg, phone, role } = user;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={profileImg} alt="User" />
            </div>
          </div>
          <div>
            <div className="font-bold">{full_name}</div>
            <div className="text-sm opacity-50">{address}</div>
          </div>
        </div>
      </td>
      <td>
        {email}
        <br />
        <span className="badge badge-ghost badge-sm">{phone}</span>
      </td>
      <td>{age}</td>
      <td>{role}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default UserCard;
