import Eachpage from "../sections/Eachpage";
import Sidebar from "../sections/Sidebar";
import classes from "./Moviepage.module.scss";

const Moviepage = () => {
  return (
    <section className={classes.moviepage}>
      <Sidebar />
      <Eachpage />
    </section>
  );
};

export default Moviepage;
