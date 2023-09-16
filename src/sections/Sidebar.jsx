// import React from 'react'
import classes from "./Sidebar.module.scss";
import movieBoxlogo from "../assets/tv.png";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const onNavigateHome = () => {
    navigate("/home");
  };
  const onNavigateMovies = () => {
    navigate("/movies/:id");
  };
  return (
    <section className={classes.sidebar}>
      <div className={classes.movieBox}>
        <img src={movieBoxlogo} alt="" />
        <h1>MovieBox</h1>
      </div>
      <nav>
        <div onClick={onNavigateHome}>
          <GoHome size={30} />
          <h6>Home</h6>
        </div>
        <div onClick={onNavigateMovies}>
          <BiCameraMovie size={30} />
          <h6>Movies</h6>
        </div>
        <div>
          <MdOndemandVideo size={30} /> <h6>TV Series</h6>
        </div>
        <div>
          <RxCalendar size={30} /> <h6>Upcoming</h6>
        </div>
        <article>
          <h3>Play movie quizes and earn free tickets</h3>
          <p>50k people are playing now</p>
          <button disabled>Start playing</button>
        </article>
        <div>
          <RiLogoutBoxRLine size={30} />
          <span>Log out</span>
        </div>
      </nav>
    </section>
  );
};

export default Sidebar;
