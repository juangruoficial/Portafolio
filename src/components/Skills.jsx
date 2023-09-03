import { useEffect } from "react";
import { activeSkillProgress } from "../utilits/utilits.js";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillsData } from "../shared/constSkillData.js";
import SkillsList from "./SkillsList.jsx";
const Skills = () => {
  const labelsArray = Object.values(skillsData.label);

  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <section className="section">
      <section className="skills">
        <section className="container">
          <article className="main_title" data-text-align="center">
            <span>
              <span>{skillsData.title}</span>
            </span>
            <h3>
              <span>{skillsData.subTitle}</span>
            </h3>
            <p>{skillsData.description}</p>
          </article>
          <section className="skills_wrapper">
            {labelsArray.map((label, index) => (
              <SkillsList key={index} label={label} />
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};
export default Skills;
