import "./App.css";
import React, { useState } from "react";

const Search = ({ value, onChange, children }) => {
  <div>
    <label htmlFor="search">{children}</label>
    <input type="text" id="search" value={value} onChange={onChange} />
  </div>;
};
function App() {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };
  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
}

export default App;
