import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const [ref, inView] = useInView();

  const features_list = [
    {
      title: "Dedication",
      icon: "/images/svg/design.svg",
      text: "Through unwavering dedication, I've transformed challenges into opportunities, turning my passion into expertise. Let's collaborate and bring dedication-driven success to your team. Contact me today to start our journey together.",
    },
    {
      title: "Smart Work",
      icon: "/images/svg/development.svg",
      text: "With a proven track record of not just hard work but also smart work, I'm ready to bring efficiency and innovation to your team. Let's achieve goals intelligently. Reach out to me today to explore how I can contribute to your organization's success.",
    },
    {
      title: "Intelligence",
      icon: "/images/svg/landing.svg",
      text: "My commitment to excellence is driven by a relentless pursuit of intelligence and continuous learning. I believe that intelligence combined with dedication can lead to remarkable achievements. I invite you to reach out and explore how my intelligence can benefit your team and projects.",
    },
  ];

  return (
    <section className="features">
      <section className="container">
        <section className="features_list">
          <ul>
            {features_list.map((feature, i) => (
              <li ref={ref} key={i}>
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
              </li>
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Features;
