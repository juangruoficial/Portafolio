import { useState } from "react";

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="mobile_menu">
      <article className="mobile_menu_inner">
        <article className="mobile_in">
          <div className="logo">
            <a href="#">
              <img src="" alt="" />
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </article>
      </article>
      <section
        className="dropdown"
        style={{
          display: toggle ? "block" : "none",
        }}
      >
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li>
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
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li className="download_cv">
              <a
                target="_blank"
                href="https://resume.io/r/DhhA0Yt90"
                rel="noreferrer"
              >
                Watch CV
              </a>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
};
export default MobileHeader;
