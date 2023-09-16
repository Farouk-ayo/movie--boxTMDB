/* eslint-disable react/prop-types */
// import React from "react";
import classes from "./Card.module.scss";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import imdb from "../assets/imdb.svg";
import tomatoFav from "../assets/rottenTomato.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Card = ({ eachMovie, key }) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/movies/${eachMovie.id}`);
  };

  const [favorite, setFavorite] = useState(true);
  const changeFavorite = (event) => {
    event.stopPropagation();
    setFavorite(!favorite);
  };

  console.log(eachMovie);

  return (
    <div
      key={key}
      className={classes.card}
      onClick={navigateHandler}
      data-testid="movie-card"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${eachMovie.poster_path}`}
        alt={`${eachMovie.title}`}
        data-testid="movie-poster"
      />
      <span className={classes.type}>TV SERIES</span>
      <span className={classes.favourite} onClick={changeFavorite}>
        {favorite ? (
          <BsHeart color="#BE123C" size={20} className={classes.noFill} />
        ) : (
          <BsHeartFill color="#BE123C" size={20} className={classes.fill} />
        )}
      </span>
      <p data-testid="movie-release-date">{eachMovie.release_date}</p>
      <h3 data-testid="movie-title">{eachMovie.title}</h3>
      <div className={classes.rating}>
        <div>
          <img src={imdb} alt="" />
          <p>{eachMovie.vote_average}/10.00</p>
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
