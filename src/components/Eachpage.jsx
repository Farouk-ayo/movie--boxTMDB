// import React from "react";
import classes from "./Eachpage.module.scss";
import { HiMiniPlay } from "react-icons/hi2";
import { BsListUl } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import otherMovies from "../assets/othermovies.png";
import ticket from "../assets/tickets.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiFetch } from "../utils/api";
import LoadingAnimation from "./Loading";

const Eachpage = () => {
  const params = useParams();
  const movie_id = params.id;
  const [details, setDetails] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiFetch(`${movie_id}`);
      setDetails(data);
      setIsLoading(false);
    };

    fetchData();
  }, [movie_id]);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <main className={classes.eachpage}>
          <section className={classes.movie}>
            <img
              src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
              alt=""
            />
            <HiMiniPlay className={classes.play} color="white" size={40} />
            <a href="">Watch Trailer</a>
          </section>
          <section className={classes.details}>
            <div className={classes.left}>
              <h3>
                <span data-testid="movie-title">{details.title}</span>
                <span>•</span>
                <span data-testid="movie-release-date>2022">
                  {details.release_date}
                </span>
                <span>•</span>
                <span data-testid="movie-runtime">{details.runtime}</span>
              </h3>
              <div>
                <span>Action</span>
                <span>Drama</span>
              </div>
            </div>
            <div className={classes.right}>
              <AiFillStar size={25} color="gold" />
              <span>8.5</span>
              <span>|</span>
              <span>350k</span>
            </div>
          </section>
          <section className={classes.bottom}>
            <div>
              <p data-testid="movie-overview">{details.overview}</p>
              <h4>
                <span>Director :</span>
                <span>Joseph Kosinski</span>
              </h4>
              <h4>
                <span>Director :</span>
                <span>Joseph Kosinski</span>
              </h4>
              <h4>
                <span>Director :</span>
                <span>Joseph Kosinski</span>
              </h4>
              <div>
                <button>Top rated movie #65</button>
                <select name="" id="">
                  <option
                    value="Awards
   9 nominations"
                  >
                    Awards 9 nominations
                  </option>
                </select>
              </div>
            </div>
            <div className={classes.bottomRight}>
              <button>
                <img src={ticket} alt="" />
                See Showtimes
              </button>
              <button>
                <BsListUl /> More watch options
              </button>
              <img src={otherMovies} alt="" />
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Eachpage;
