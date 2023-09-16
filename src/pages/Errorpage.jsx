// import React from "react";
import gif from "../assets/gif.gif";
import classes from "./Errorpage.module.scss";

const Errorpage = () => {
  return (
    <div className={classes.container}>
      <h1>Something went wrong</h1>
      <img src={gif} alt="" />
    </div>
  );
};

export default Errorpage;
