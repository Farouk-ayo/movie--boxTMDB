// import React from 'react'
import classes from "./Search.module.scss";
import { HiOutlineSearch } from "react-icons/hi";

const Search = () => {
  return (
    <form
      action="
      "
      className={classes.form}
    >
      <input
        type="search"
        name=""
        id=""
        placeholder="What do you want to watch?"
      />
      <button type="submit">
        <span>
          {" "}
          <HiOutlineSearch color="#ffffff" size={20} />
        </span>
      </button>
    </form>
  );
};

export default Search;
