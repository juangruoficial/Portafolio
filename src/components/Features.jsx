import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const [ref, inView] = useInView();

  const features_list = [
    {
      title: "Dedication",
      icon: "/images/svg/design.svg",
      text: "Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat.",
    },
    {
      title: "Smart Work",
      icon: "/images/svg/development.svg",
      text: "Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat.",
    },
    {
      title: "Intelligence",
      icon: "/images/svg/landing.svg",
      text: "Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat.",
    },
  ];

  return (
    <section className="features">
      <section className="container">
        <section className="features_list">
          <ul>
            {features_list.map((feature, i) => (
              <motion.li
                ref={ref}
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 20,
                  scale: inView ? 1 : 0.75,
                }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="list_inner">
                  <div className="short">
                    <div className="title">
                      <span>{`0${i + 1}`}</span>
                      <h3>{feature.title}</h3>
                    </div>
                    <div className="icon">
                      <img className="svg" src={feature.icon} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <p>{feature.text}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Features;
