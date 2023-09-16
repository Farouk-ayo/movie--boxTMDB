import Eachpage from "../components/Eachpage";
import Sidebar from "../components/Sidebar";
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
