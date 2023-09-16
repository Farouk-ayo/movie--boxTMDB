// LoadingAnimation.js

// import React from "react";
import classes from "./Loading.module.scss"; // Import the SCSS file

const LoadingAnimation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default LoadingAnimation;
