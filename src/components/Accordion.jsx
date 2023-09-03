import { Fragment, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const accordionData = [
  {
    title: "Work Strategy",
    details:
      "Discover the seamless fusion of strategic planning and technical expertise in our projects. With a meticulous approach, we map out every detail to ensure our development process aligns perfectly with your goals. From conceptualization to execution, we craft a roadmap that optimizes resources, minimizes risks, and maximizes success.",
  },
  {
    title: "The Process of Our Work",
    details:
      "Delve into the intricate process behind our creations, where innovation and precision intertwine. Witness the transformation of ideas into functional masterpieces as we navigate through design, coding, and testing phases. Our collaborative approach ensures that every line of code, every pixel, and every interaction is purposeful, resulting in polished products that exceed expectations.",
  },
  {
    title: "Core Value of Development",
    details:
      "At the heart of our development philosophy is a commitment to excellence, innovation, and adaptability. We believe in creating solutions that not only meet immediate needs but also evolve to embrace future challenges. By adhering to industry best practices, staying abreast of emerging technologies, and fostering a culture of continuous learning, we consistently deliver solutions that stand the test of time.",
  },
  {
    title: "Desire to Work Hard",
    details:
      "Immerse yourself in our relentless dedication and unwavering work ethic. We approach each project with a burning passion to turn ideas into realities. Whether it's solving complex coding puzzles or refining user experiences, our commitment to going the extra mile ensures that we not only meet but exceed project expectations. With every challenge, we embrace the opportunity to showcase our dedication and deliver results that make us proud.",
  },
];

const Accordion = () => {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  useEffect(() => {
    setActive(0);
  }, [contentEl.current]);

  const onClick = (value) =>
    value === active ? setActive(null) : setActive(value);

  return (
    <>
      <section className="accordion" data-active={1} data-type="accordion">
        {accordionData.map((accordion, i) => (
          <motion.section
            key={i}
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 20,
              scale: inView ? 1 : 0.75,
            }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`accordion_in ${active == i ? "acc_active" : ""}`}
          >
            <article className="acc_head" onClick={() => onClick(i)}>
              <span className="plus" />
              <p>{accordion.title}</p>
            </article>
            <article
              className={`acc_content d-block`}
              ref={contentEl}
              style={
                active === i
                  ? {
                      height:
                        contentEl.current && contentEl.current.scrollHeight,
                    }
                  : { height: "0px" }
              }
            >
              <aside className="acc_content_in">
                <p>{accordion.details}</p>
              </aside>
            </article>
          </motion.section>
        ))}
      </section>
    </>
  );
};
export default Accordion;
