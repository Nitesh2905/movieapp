import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <nav className="nav">
      <h3>MovieApp</h3>
      <input type="text" placeHolder="Search movies" />
    </nav>
  );
};

export default SearchBar;
