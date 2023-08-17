import { useEffect } from "react";
import { activeSkillProgress } from "../utilits/utilits.js";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Skills = () => {
  const [ref, inView] = useInView();
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="section">
      <div className="skills">
        <div className="container">
          <div className="main_title" data-text-align="center">
            <span>My Skills</span>
            <h3>I Develop Skills Regularly</h3>
            <p>
              Experienced programmer proficient in a diverse range of languages
              and technologies. With a solid foundation in these technologies, I
              am committed to delivering efficient and user-centric software
              solutions.
            </p>
          </div>
          <div className="skills_wrapper">
            <div className="left">
              <div className="dodo_progress">
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
              </div>
            </div>
            <motion.div
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
              <div className="dodo_progress">
                <div
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
                </div>
                <div
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
                </div>
                <div
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
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
