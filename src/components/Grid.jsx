/* eslint-disable react/prop-types */
// import React from "react";
import Card from "./Card";
import classes from "./Grid.module.scss";

const Grid = ({ movies }) => {
  // console.log(movies);
  return (
    <div className={classes.grid}>
      {movies &&
        movies.map((eachMovie) => (
          <Card key={eachMovie.id} eachMovie={eachMovie} />
        ))}
    </div>
  );
};

export default Grid;
