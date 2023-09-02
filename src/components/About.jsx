import { motion } from "framer-motion";

const aboutData = {
  designation: "Developer",
  title: "I Develop Web Application that Help People",
  text: [
    "Beyond my professional pursuits, I am an avid traveler and a fervent advocate for sustainable living. Exploring diverse cultures and landscapes has enriched my worldview and reinforced my belief in the importance of environmental stewardship. In my free time, you can find me hiking in remote wilderness areas or volunteering for local conservation initiatives. My goal is to leverage my technical expertise to contribute to projects that align with my values and promote a more sustainable and interconnected world.",
  ],
  skillIcons: [
    { name: "joomla", icon: "/images/about/jssvg.svg" },
    { name: "wp", icon: "/images/svg/wp.svg" },
    { name: "drupal", icon: "/images/svg/drupal.svg" },
    { name: "laravel", icon: "/images/svg/laravel.svg" },
  ],
};

const About = () => {
  return (
    <section className="section" id="about">
      <section className="about">
        <div className="container">
          <section className="about_inner">
            <aside className="left">
              <div className="image_wrap">
                <img src="/images/thumbs/64-49.jpg" alt="" />
                <div
                  className="main"
                  data-img-url="/images/about/profilephoto.webp"
                />
                <div className="extra_image">
                  <div className="image_inner">
                    <img src="/images/thumbs/1-1.jpg" alt="" />
                  </div>
                </div>
                {aboutData.skillIcons.map((skill, i) => (
                  <div className={i === 0 ? "extra_image" : ""} key={i}>
                    <span className={`icon_${i + 1}`}>
                      <img className="svg" src={skill.icon} alt="" />
                    </span>
                  </div>
                ))}
              </div>
            </aside>
            <aside className="right">
              <section className="title">
                <span>
                  {`I'm`} a {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </section>
              <section className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </section>
              <div className="button">
                <motion.a
                  href="#portfolio"
                  whileHover={{
                    scale: 1.09,
                    background:
                      "linear-gradient(135deg, #FF6B6B 0%, #FFB72B 100%)",
                  }}
                  whileTap={{ scale: 0.7 }}
                  transition={{ duration: 0.3 }}
                  className="anchor"
                >
                  View Portfolio
                </motion.a>
              </div>
            </aside>
          </section>
        </div>
      </section>
    </section>
  );
};
export default About;
