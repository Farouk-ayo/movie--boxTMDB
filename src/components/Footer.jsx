// import React from "react";
import classes from "./Footer.module.scss";

import {
  FaInstagram,
  FaSquareFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div>
        <FaSquareFacebook
          size={30}
          color="
#111827"
        />
        <FaInstagram
          size={30}
          color="
#111827"
        />
        <FaTwitter
          size={30}
          color="
#111827"
        />
        <FaYoutube
          size={30}
          color="
#111827"
        />
      </div>
      <div>
        <a href="">Conditions of Use</a>
        <a href="">Privacy & Policy</a>
        <a href="">Press Room</a>
      </div>
      <div>© 2021 MovieBox by Adriana Eka Prayudha </div>
    </section>
  );
};

export default Footer;
