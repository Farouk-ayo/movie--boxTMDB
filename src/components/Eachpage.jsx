// import React from "react";
import classes from "./Eachpage.module.scss";
import { HiMiniPlay } from "react-icons/hi2";
import { BsListUl } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import otherMovies from "../assets/othermovies.png";
import previewPhoto from "../assets/landphoto.png";
import ticket from "../assets/tickets.svg";

const Eachpage = () => {
  return (
    <main className={classes.eachpage}>
      <section className={classes.movie}>
        <img src={previewPhoto} alt="" />
        <HiMiniPlay className={classes.play} color="white" size={40} />
        <a href="">Watch Trailer</a>
      </section>
      <section className={classes.details}>
        <div className={classes.left}>
          <h3>
            <span>Top Gun: Maverick</span>
            <span>•</span>
            <span>2022</span>
            <span>•</span>
            <span>PG-13</span>
            <span>2h 10m</span>
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
          <p>
            After thirty years, Maverick is still pushing the envelope as a top
            naval aviator, but must confront ghosts of his past when he leads
            TOP guns elite graduates on a mission that demands the ultimate
            sacrifice from those chosen to fly it.
          </p>
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
  );
};

export default Eachpage;
