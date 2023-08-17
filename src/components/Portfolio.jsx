import { Fragment, useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Portfolio = () => {
  const [ref, inView] = useInView();
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="section" id="portfolio">
        <div className="portfolio">
          <div className="container">
            <div className="main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
                Dliquip ex ea commo do conse namber onequa ute irure dolor in
                reprehen derit in voluptate
              </p>
            </div>
            <div className="portfolio_list">
              <motion.ul
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 20,
                  scale: inView ? 1 : 0.75,
                }}
                transition={{ duration: 0.6 }}
              >
                <li>
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="/public/images/portafolio/galaxies.webp"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">WebPage</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> knowledge about galaxies
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      target="blank"
                      className="full_link popup-page"
                      href="https://spacecuriositiesjuan.netlify.app/"
                    />
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="/public/images/portafolio/weatherweb.png"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">WebPage</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> Weather forecast
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      target="blank"
                      className="full_link popup-page"
                      href="https://weatheforecastjuan.netlify.app/"
                    />
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="/public/images/portafolio/rickandmorty.png"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">Interactive page</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> Rick and Morty
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      target="blank"
                      className="full_link popup-page"
                      href="https://rickandmortycruz.netlify.app/"
                    />
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="/public/images/portafolio/ecommerce.png"
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">Interactive page</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                            Web Application for
                            <br /> E-commerce
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>

                    <div className="overlay" />
                    <a
                      target="blank"
                      className="full_link popup-page"
                      href="https://juane-commerce.netlify.app/"
                    />
                  </div>
                </li>
                <div
                  className="shape_1 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
                <div
                  className="shape_2 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
