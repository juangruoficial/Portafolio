import { useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Portfolio = () => {
  const [ref, inView] = useInView();
  const [popup, setPopup] = useState(false);
  return (
    <>
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <section className="section" id="portfolio">
        <section className="portfolio">
          <div className="container">
            <article className="main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
                Welcome to my portfolio! I'm a junior developer passionate about
                crafting technological solutions. My focus is on continuous
                learning and growth in the world of web development and
                programming. Here, you'll find a showcase of my projects and
                work where I've applied my technical skills and enthusiasm for
                innovation. I'm excited about the opportunity to collaborate on
                challenging projects and continue honing my skills while working
                together to achieve outstanding results.
              </p>
            </article>
            <article className="portfolio_list">
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
                  <section className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="/images/portafolio/galaxies.webp"
                    />
                    <div className="content">
                      <article className="details">
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
                      </article>
                    </div>
                    <div className="overlay" />
                    <a
                      target="blank"
                      className="full_link popup-page"
                      href="https://spacecuriositiesjuan.netlify.app/"
                    />
                  </section>
                </li>
                <li>
                  <section className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="/images/portafolio/weatherweb.png"
                    />
                    <section className="content">
                      <article className="details">
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
                      </article>
                    </section>
                    <div className="overlay" />
                    <a
                      target="blank"
                      className="full_link popup-page"
                      href="https://weatheforecastjuan.netlify.app/"
                    />
                  </section>
                </li>
                <li>
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="/images/portafolio/rickandmorty.png"
                    />
                    <section className="content">
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
                    </section>

                    <a
                      target="blank"
                      className="full_link popup-page"
                      href="https://rickandmortycruz.netlify.app/"
                    />
                  </div>
                </li>
                <li>
                  <section className="list_inner">
                    <div
                      className="background_image"
                      data-img-url="/images/portafolio/ecommerce.png"
                    />
                    <section className="content">
                      <section className="details">
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
                      </section>
                    </section>

                    <a
                      target="blank"
                      className="full_link popup-page"
                      href="https://juane-commerce.netlify.app/"
                    />
                  </section>
                </li>
              </motion.ul>
            </article>
          </div>
        </section>
      </section>
    </>
  );
};
export default Portfolio;
