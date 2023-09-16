// import React from "react";
import classes from "./Eachpage.module.scss";
import { BsListUl } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import ticket from "../assets/tickets.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiFetch } from "../utils/api";
import LoadingAnimation from "../components/Loading";

const Eachpage = () => {
  const params = useParams();
  const movie_id = params.id;
  const [details, setDetails] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [video, setVideo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiFetch(`${movie_id}`);
      const dataVideo = await apiFetch(`${movie_id}/videos?language=en-US`);
      setDetails(data);
      setVideo(dataVideo.results[0]);
      setIsLoading(false);
    };

    fetchData();
  }, [movie_id]);

  const getUtc = () => {
    const date = new Date(details.release_date).toUTCString();
    const newDate = date.split(" ").slice(0, 4).join(" ");
    return newDate;
  };

  console.log(video);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <main className={classes.eachpage}>
          <section className={classes.movie}>
            <iframe
              width="100%"
              height="500"
              className={classes.trailer}
              src={`https://www.youtube.com/embed/${video.key}`}
            ></iframe>
          </section>
          <section className={classes.details}>
            <div className={classes.left}>
              <h3>
                <span data-testid="movie-title">{details.title}</span>
                <span>•</span>
                <span data-testid="movie-release-date">{getUtc()}</span>
                <span>•</span>
                <span data-testid="movie-runtime">{`${details.runtime} minutes`}</span>
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
              <div>
                <button>Top rated movie #65</button>
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
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Eachpage;
