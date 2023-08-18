import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../utilits/sliderProps.js";
import { dataImage } from "../utilits/utilits.js";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [ref, inView] = useInView();
  useEffect(() => {
    dataImage();
  }, []);

  return (
    <div className="section">
      <div className="testimonials">
        <div className="container">
          <div className="main_title" data-text-align="center">
            <span>Testimonial</span>
            <h3>What Clients Say</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div className="testimonials_list">
            <Swiper
              {...testimonialsSlider}
              className="owl-carousel owl-theme owl-loaded"
            >
              <SwiperSlide>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 20,
                    scale: inView ? 1 : 0.75,
                  }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="list_inner"
                >
                  <img className="svg" src="/images/svg/quote.svg" alt="" />
                  <p className="text">
                    Juan is a true expert. Captured my vision perfectly.
                    Thrilled with the results!
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="/images/testimonials/dummy.png"
                      />
                    </div>
                    <div className="short">
                      <h3>Selena Brook</h3>
                      <span>Client</span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="/images/svg/quote.svg" alt="" />
                  <p className="text">
                    Delighted with Juan's impressive web design. Highly
                    recommended. Captured my vision!
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="/images/testimonials/dummy.png"
                      />
                    </div>
                    <div className="short">
                      <h3>David Parker</h3>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="/images/svg/quote.svg" alt="" />
                  <p className="text">
                    Juan is exceptional. Stunning website. Creative,
                    professional, and user-friendly. Truly impressed.
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="/images/testimonials/dummy.png"
                      />
                    </div>
                    <div className="short">
                      <h3>Jessica Smith</h3>
                      <span>Client</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="/images/svg/quote.svg" alt="" />
                  <p className="text">
                    Amazed by Juan's elegant, modern, responsive website.
                    Outstanding online presence!
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="/images/testimonials/dummy.png"
                      />
                    </div>
                    <div className="short">
                      <h3>Collin Mattew</h3>
                      <span>Client</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="owl-dots"></div>
            </Swiper>

            <div
              className="shape moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
            <div
              className="shape_2 moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
