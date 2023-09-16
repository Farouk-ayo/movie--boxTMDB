// import React from "react";
import classes from "./Header.module.scss";
import imdb from "../assets/imdb.svg";
import tomatoFav from "../assets/rottenTomato.svg";
import { FaPlay } from "react-icons/fa6";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { apiFetch } from "../utils/api";

const Header = () => {
  const [details, setDetails] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiFetch(`458156`);
      setDetails(data);
    };

    fetchData();
  }, []);

  console.log(details);
  return (
    <header className={classes.header}>
      <Navbar />
      <div className={classes.textcontent}>
        <h1 data-testid="movie-title">{details.title}</h1>
        <div>
          <span>
            <img src={imdb} alt="" />
            <p>8.0/10.00</p>
          </span>
          <span>
            <img src={tomatoFav} alt="" />
            <p>{details.vote_average}</p>
          </span>
        </div>
        <p data-testid="movie-overview">{details.overview}</p>
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
