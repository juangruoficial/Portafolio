import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import Preloader from "./Preloader";

import { dataImage, moving_animation, imgToSVG } from "../utilits/utilits.js";

const Layout = ({ children }) => {
  useEffect(() => {
    dataImage();
    imgToSVG();

    moving_animation();
  }, []);

  return (
    <Fragment>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet"
      />

      <Preloader />
      <VideoPopup />
      <ImageView />
      {/* /PRELOADER */}
      {/* WRAPPER ALL */}
      <div className="all_wrap" data-magic-cursor="show">
        {children}
      </div>
    </Fragment>
  );
};
export default Layout;
