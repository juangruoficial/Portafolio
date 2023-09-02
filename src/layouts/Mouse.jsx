import { useEffect } from "react";
import { customCursor } from "../utilits/utilits.js";
const Mouse = () => {
  useEffect(() => {
    customCursor();
  }, []);

  return (
    <>
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />
    </>
  );
};
export default Mouse;
