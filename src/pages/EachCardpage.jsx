import Sidebar from "../components/Sidebar";
import classes from "./EachCardpage.module.scss";

const EachCardpage = () => {
  return (
    <section className={classes.eachCardpage}>
      <Sidebar />
    </section>
  );
};

export default EachCardpage;
