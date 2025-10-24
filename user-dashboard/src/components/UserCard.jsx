
import React from "react";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div>
        <h3>{user.name}</h3>
        <p className="email">{user.email}</p>
      </div>

      <span className={`role-badge ${user.role.toLowerCase()}`}>
        {user.role}
      </span>
    </div>
  );
}

export default UserCard;
