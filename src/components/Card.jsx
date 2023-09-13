// import React from "react";
import classes from "./Card.module.scss";
import poster from "../assets/poster1.png";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import imdb from "../assets/imdb.svg";
import tomatoFav from "../assets/rottenTomato.svg";

const Card = () => {
  return (
    <div className={classes.card}>
      <img src={poster} alt="" />
      <span className={classes.type}>TV SERIES</span>
      <span className={classes.favourite}>
        <BsHeart color="#BE123C" />
        <BsHeartFill color="#BE123C" />
      </span>
      <p>USA, 2016 - Current</p>
      <h3>Stranger Things</h3>
      <div className={classes.rating}>
        <div>
          <img src={imdb} alt="" />
          <p>8.0/10.00</p>
        </div>
        <div>
          <img src={tomatoFav} alt="" />
          <p>97%</p>
        </div>
      </div>
      <div className={classes.genre}>
        <p>Adventure, Action, Horror</p>
      </div>
    </div>
  );
};

export default Card;
