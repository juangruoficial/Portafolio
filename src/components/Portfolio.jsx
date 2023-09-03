import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portafolioData } from "../shared/constPortafolioData";
import PortafolioCardProject from "./PortafolioCardProject";
const Portfolio = () => {
  const [ref, inView] = useInView();

  return (
    <>
      <section className="section" id="portfolio">
        <section className="portfolio">
          <div className="container">
            <article className="main_title" data-text-align="center">
              <span>{portafolioData.title}</span>
              <h3>{portafolioData.subTitle}</h3>
              <p>{portafolioData.description}</p>
            </article>
            <article className="portfolio_list">
              <motion.ul
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 20,
                  scale: inView ? 1 : 0.75,
                }}
                transition={{ duration: 0.6 }}
              >
                {portafolioData.projects.map((project, i) => (
                  <PortafolioCardProject key={i} project={project} />
                ))}
              </motion.ul>
            </article>
          </div>
        </section>
      </section>
    </>
  );
};
export default Portfolio;
