// import React from "react";
import { useNavigate } from "react-router-dom";
import gif from "../assets/gif.gif";
import classes from "./Errorpage.module.scss";

const Errorpage = () => {
  const navigate = useNavigate();
  const onNavigateHome = () => {
    navigate("/home");
  };

  return (
    <div className={classes.container}>
      <h1>Something went wrong</h1>
      <img src={gif} alt="" />
      <button onClick={onNavigateHome}>Go home</button>
    </div>
  );
};

export default Errorpage;
