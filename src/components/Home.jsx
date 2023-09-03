import Counter from "./Counter.jsx";
import { animate, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { homeData } from "../shared/constHomeData";
import RightHome from "./RightHome.jsx";
import LeftHome from "./LeftHome.jsx";

const Home = () => {
  const [ref, inView] = useInView();
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{
        y: 0,
        opacity: inView ? 1 : 0,

        scale: inView ? 1 : 0.75,
      }}
      transition={{ delay: 0.2, duration: 0.6 }}
      ref={ref}
      className="section"
      id="home"
    >
      <section className="hero">
        <div className="background">
          <div className="image" data-img-url="/images/hero/home.webp" />
        </div>
        <section className="container">
          <section className="content">
            <LeftHome homeData={homeData} />
            <RightHome homeData={homeData} />
          </section>
        </section>
      </section>
    </motion.section>
  );
};
export default Home;
