// import React from "react";
import classes from "./Header.module.scss";
import imdb from "../assets/imdb.png";
import tomatoFav from "../assets/rottenTomato.png";
import { FaPlay } from "react-icons/fa6";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={classes.header}>
      <Navbar />
      <div className={classes.textcontent}>
        <h1>
          John Wick 3 :<br /> Parabellum
        </h1>
        <div>
          <span>
            <img src={imdb} alt="" />
            <p>8.0/10.00</p>
          </span>
          <span>
            <img src={tomatoFav} alt="" />
            <p>97%</p>
          </span>
        </div>
        <p>
          John Wick is on the run after killing a member of the international
          assassins guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button>
          <span>
            <FaPlay color="#be123c" size={18} />
          </span>
          Watch trailer
        </button>
      </div>
    </header>
  );
};

export default Header;
