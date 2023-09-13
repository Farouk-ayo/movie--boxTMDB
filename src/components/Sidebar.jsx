// import React from 'react'
import classes from "./Sidebar.module.scss";
import movieBoxlogo from "../assets/tv.png";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <section className={classes.sidebar}>
      <div>
        <img src={movieBoxlogo} alt="" />
        <h1>MovieBox</h1>
      </div>
      <nav>
        <div>
          <GoHome />
          <h6>Home</h6>
        </div>
        <div>
          <BiCameraMovie />
          <h6>Movies</h6>
        </div>
        <div>
          <MdOndemandVideo /> <h6>TV Series</h6>
        </div>
        <div>
          <RxCalendar /> <h6>Upcoming</h6>
        </div>
        <article>
          <h3>Play movie quizes and earn free tickets</h3>
          <p>50k people are playing now</p>
          <button disabled>Start playing</button>
        </article>
        <div>
          <RiLogoutBoxRLine />
          <span>Log out</span>
        </div>
      </nav>
    </section>
  );
};

export default Sidebar;
