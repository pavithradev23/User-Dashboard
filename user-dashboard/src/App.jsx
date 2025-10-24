import { useState, useEffect } from "react";
import usersData from "./data/users.json";
import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import UserStats from "./components/UserStats";
import Login from "./Login";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  const filteredUsers = usersData.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) &&
      (role ? user.role === role : true)
    );
  });

  if (!loggedIn) {
    return <Login onLogin={() => {
      localStorage.setItem("loggedIn", "true");
      setLoggedIn(true);
    }} />;
  }

  return (
    <div className="app">
      <h1>User Management Dashboard</h1>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <div className="controls">
        <SearchBar value={search} onChange={setSearch} />
        <Filter onChange={setRole} />
      </div>

      <UserStats users={filteredUsers} />

      <div className="user-list">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
