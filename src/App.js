import "./App.css";
import React, { useEffect, useState } from "react";

const getUser = () => Promise.resolve({ id: 1, name: "Dmytro" });
const Search = ({ value, onChange, children }) => {
  return (
    <div>
      <img className="image" src="" alt="search image" />
      <label htmlFor="search">{children}</label>
      <input
        placeholder="search text..."
        type="text"
        id="search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

function App() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    loadUser();
  }, []);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };
  return (
    <div>
      {user && <h2>Logged in as {user.name}</h2>}
      <Search value={search} onChange={handleChange}>
        SEARCH:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
}

export default App;
