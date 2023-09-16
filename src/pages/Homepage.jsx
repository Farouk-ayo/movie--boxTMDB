// import React from "react";

import Grid from "../components/Grid";
import Header from "../components/Header";
import right from "../assets/right.svg";
import classes from "./Homepage.module.scss";
import Footer from "../components/Footer";
import { apiFetch } from "../utils/api";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    if (apiFetch.length === 0) {
      const fetchData = async () => {
        const data = await apiFetch();
        setMovies(data.results.slice(0, 10));
      };
      fetchData();
    }
  }, []);

  const editedFetchMovies = movies;

  return (
    <section>
      <Header />
      <div className={classes.header}>
        <h2>Featured Movie</h2>
        <a href="">
          <span>See all</span>
          <span>
            <img src={right} alt="" />
          </span>
        </a>
        <Grid movies={editedFetchMovies} />
      </div>
      <Footer />
    </section>
  );
};

export default Homepage;
