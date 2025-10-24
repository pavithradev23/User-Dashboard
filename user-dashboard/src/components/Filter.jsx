
import React from "react";

export default function Filter({ onChange }) {
  return (
    <select
      className="filter-select"
      onChange={(e) => onChange(e.target.value)}
      defaultValue=""
      aria-label="Filter by role"
    >
      <option value="">All Roles</option>
      <option value="Admin">Admin</option>
      <option value="Editor">Editor</option>
      <option value="User">User</option>
    </select>
  );
}
