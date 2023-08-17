import { useEffect } from "react";
import { preloader } from "../utilits/utilits.js";

const Preloader = () => {
  useEffect(() => {
    preloader();
  }, []);

  return (
    <div id="preloader">
      <div className="loader_line" />
    </div>
  );
};
export default Preloader;
