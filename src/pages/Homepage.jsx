// import React from "react";

import Grid from "../components/Grid";
import Header from "../components/Header";
import right from "../assets/right.svg";
import classes from "./Homepage.module.scss";
import Footer from "../components/Footer";
import { apiFetch } from "../utils/api";
import { useEffect, useState } from "react";
import LoadingAnimation from "../components/Loading";

const Homepage = () => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiFetch("top_rated");
      setMovies(data.results.slice(0, 10));
      setIsLoading(false);
    };

    // if (apiFetch.length === 0) {
    fetchData();
    // }
  }, [movies]);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
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
            <Grid movies={movies} />
          </div>
          <Footer />
        </section>
      )}
    </>
  );
};

export default Homepage;
