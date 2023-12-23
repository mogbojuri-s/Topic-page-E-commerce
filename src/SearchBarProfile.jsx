import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchProfile.css";

const SearchBarProfile = () => {
  return (
    <div className="search-profile">
      {/* <FaSearch className="search-icon" /> */}
      <input
        type="text"
        placeholder="What can we help you with?"
        className="input_search"
      />
    </div>
  );
};

export default SearchBarProfile;
