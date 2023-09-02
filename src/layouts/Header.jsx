import { useEffect } from "react";
import { scrollSection, stickyNav } from "../utilits/utilits.js";
import { motion } from "framer-motion";
const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
  }, []);

  return (
    <section className="nav_header">
      <section className="container">
        <section className="header_inner">
          <aside className="logo">
            <a className="light" href="#">
              <img src="/images/about/logojuan.png" alt="" />
            </a>
            <a className="dark" href="#">
              <img src="/images/about/logojuandark.png" alt="" />
            </a>
          </aside>
          <section className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>

              <li className="download_cv">
                <motion.a
                  whileHover={{
                    scale: 1.09,
                    background:
                      "linear-gradient(135deg, #FF6B6B 0%, #FFB72B 100%)",
                  }}
                  whileTap={{ scale: 0.7 }}
                  transition={{ duration: 0.3 }}
                  href="https://resume.io/r/DhhA0Yt90"
                  target="_blank"
                >
                  Watch CV
                </motion.a>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};
export default Header;
