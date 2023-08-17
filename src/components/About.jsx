import { motion } from "framer-motion";

const aboutData = {
  designation: "Developer",
  title: "I Develop Application that Help People",
  text: [
    "Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat cupidatat",
    "Krnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis",
  ],
  skillIcons: [
    { name: "joomla", icon: "/public/images/about/jssvg.svg" },
    { name: "wp", icon: "/public/images/svg/wp.svg" },
    { name: "drupal", icon: "/public/images/svg/drupal.svg" },
    { name: "laravel", icon: "/public/images/svg/laravel.svg" },
  ],
};

const About = () => {
  return (
    <div className="section" id="about">
      <div className="about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img src="/public/images/thumbs/64-49.jpg" alt="" />
                <div
                  className="main"
                  data-img-url="/public/images/about/profilephoto.webp"
                />
                <div className="extra_image">
                  <div className="image_inner">
                    <img src="/public/images/thumbs/1-1.jpg" alt="" />
                    <div
                      className="main_extra"
                      data-img-url="/public/images/about/logojuandark.png"
                    />
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
            </div>
            <div className="right">
              <div className="title">
                <span>
                  {`I'm`} a {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </div>
              <div className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
