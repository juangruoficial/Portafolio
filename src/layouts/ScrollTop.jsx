import { useEffect } from "react";
import { scrollTop } from "../utilits/utilits.js";

const ScrollTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", scrollTop);
  }, []);

  const textStyle = {
    bottom: "155.75px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#FF5733",
  };

  const lineStyle = {
    height: "5px",
    width: "3px",
    backgroundColor: "#FF5733",
  };

  return (
    <section className="progressbar">
      <a href="#">
        <span className="text" style={textStyle}>
          To Top
        </span>
      </a>
      <span className="line" style={lineStyle} />
    </section>
  );
};

export default ScrollTop;
