import React, { useState } from "react";
import Searchbarstyles from "../components/Searchbarstyles.css";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        className="search"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder=" &#128269;  Search "
      />

      <input onClick={callSearchFunction} type="submit" value="Go !"className="buttonsgn"/>
    </form>
  );
};

export default Search;
