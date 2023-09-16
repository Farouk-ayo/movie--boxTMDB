// import React from "react";
import classes from "./Navbar.module.scss";
import tvLogo from "../assets/tv.png";
import menu from "../assets/Menu.png";
import Search from "../components/Search";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img src={tvLogo} alt="" />
        <h1>MovieBox</h1>
      </div>
      <Search />
      <div>
        <h2>Sign in</h2>
        <img src={menu} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
