import { useEffect } from "react";
import { scrollSection, stickyNav } from "../utilits/utilits.js";
import { motion } from "framer-motion";
import Menu from "../components/Menu.jsx";
const Header = () => {
  const lists = {
    home: {
      name: "Home",
      link: "#home",
    },
    about: {
      name: "About",
      link: "#about",
    },
    portfolio: {
      name: "Portfolio",
      link: "#portfolio",
    },
    service: {
      name: "Service",
      link: "#service",
    },
    contact: {
      name: "Contact",
      link: "#contact",
    },
  };
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
            <Menu />
          </section>
        </section>
      </section>
    </section>
  );
};
export default Header;
