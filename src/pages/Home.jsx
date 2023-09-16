// import React from "react";

import Grid from "../components/Grid";
import Header from "../components/Header";
import right from "../assets/right.svg";
import classes from "./Home.module.scss";
import Footer from "../components/Footer";
import { apiFetch } from "../utils/api";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await apiFetch();
      setMovies(data);
    };
    fetchData();
  }, []);

  console.log(movies);

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
        <Grid />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
