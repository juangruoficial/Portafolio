import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { activeSkillProgress } from "../utilits/utilits";
const SkillsList = ({ label }) => {
  const [ref, inView] = useInView();
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);
  return (
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
      data-value={label.value}
      data-color="#142eb5"
    >
      <span>
        <span className="label">{label.name}</span>
        <span className="number">{label.value}%</span>
      </span>
      <div className="background">
        <div className="bar">
          <div className="bar_in" />
        </div>
      </div>
    </motion.div>
  );
};
export default SkillsList;
