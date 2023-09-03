import { useState } from "react";
import Menu from "../components/Menu";

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
        <section className="dropdown_inner">
          <Menu />
        </section>
      </section>
    </header>
  );
};
export default MobileHeader;
