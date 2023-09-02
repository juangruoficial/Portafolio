import { useEffect } from "react";
import { activeSkillProgress } from "../utilits/utilits.js";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Skills = () => {
  const [refHTML, inViewHTML] = useInView();
  const [refCSS, inViewCSS] = useInView();
  const [refPython, inViewPython] = useInView();
  const [refReact, inViewReact] = useInView();
  const [refJavaScript, inViewJavaScript] = useInView();
  const [ref, inView] = useInView();
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <section className="section">
      <section className="skills">
        <section className="container">
          <article className="main_title" data-text-align="center">
            <span>My Skills</span>
            <h3>I Develop Skills Regularly</h3>
            <p>
              Experienced programmer proficient in a diverse range of languages
              and technologies. With a solid foundation in these technologies, I
              am committed to delivering efficient and user-centric software
              solutions.
            </p>
          </article>
          <section className="skills_wrapper">
            <section className="left">
              <article className="dodo_progress">
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 20,
                    scale: inView ? 1 : 0.65,
                  }}
                  transition={{ duration: 0.6 }}
                  className="skillsInner___ progress_inner"
                  data-value={90}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">HTML</span>
                    <span className="number">90%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 20,
                    scale: inView ? 1 : 0.65,
                  }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="skillsInner___ progress_inner"
                  data-value={75}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">CSS</span>
                    <span className="number">75%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </motion.div>
              </article>
            </section>
            <motion.section
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 20,
                scale: inView ? 1 : 0.65,
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="right"
            >
              <section className="dodo_progress">
                <article
                  className="skillsInner___ progress_inner"
                  data-value={50}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">PYTHON</span>
                    <span className="number">50%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </article>
                <article
                  className="skillsInner___ progress_inner"
                  data-value={65}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">REACT</span>
                    <span className="number">65%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </article>
                <article
                  className="skillsInner___ progress_inner"
                  data-value={70}
                  data-color="#142eb5"
                >
                  <span>
                    <span className="label">JAVASCRIPT</span>
                    <span className="number">70%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </article>
              </section>
            </motion.section>
          </section>
        </section>
      </section>
    </section>
  );
};
export default Skills;
