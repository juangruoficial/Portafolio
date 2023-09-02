import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../utilits/sliderProps.js";
import { dataImage } from "../utilits/utilits.js";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  useEffect(() => {
    dataImage();
  }, []);

  return (
    <section className="section">
      <section className="testimonials">
        <section className="container">
          <article className="main_title" data-text-align="center">
            <span>Testimonial</span>
            <h3>What Robot Clients Say</h3>
            <p>Our customers love us. Thanks for being part of our success!</p>
          </article>

          <article className="testimonials_list">
            <Swiper
              {...testimonialsSlider}
              className="owl-carousel owl-theme owl-loaded"
            >
              <SwiperSlide>
                <article className="list_inner">
                  <img className="svg" src="/images/svg/quote.svg" alt="" />
                  <p className="text">
                    Juan is a true expert. Captured my vision perfectly.
                    Thrilled with the results!
                  </p>
                  <section className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="/images/testimonials/dummy.png"
                      />
                    </div>
                    <section className="short">
                      <h3>Selena Brook</h3>
                      <span>Client</span>
                    </section>
                  </section>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="list_inner">
                  <img className="svg" src="/images/svg/quote.svg" alt="" />
                  <p className="text">
                    Delighted with Juan's impressive web design. Highly
                    recommended. Captured my vision!
                  </p>
                  <section className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="/images/testimonials/dummy.png"
                      />
                    </div>
                    <section className="short">
                      <h3>David Parker</h3>
                      <span>Designer</span>
                    </section>
                  </section>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="list_inner">
                  <img className="svg" src="/images/svg/quote.svg" alt="" />
                  <p className="text">
                    Juan is exceptional. Stunning website. Creative,
                    professional, and user-friendly. Truly impressed.
                  </p>
                  <section className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="/images/testimonials/dummy.png"
                      />
                    </div>
                    <section className="short">
                      <h3>Jessica Smith</h3>
                      <span>Client</span>
                    </section>
                  </section>
                </article>
              </SwiperSlide>
              <SwiperSlide>
                <article className="list_inner">
                  <img className="svg" src="/images/svg/quote.svg" alt="" />
                  <p className="text">
                    Amazed by Juan's elegant, modern, responsive website.
                    Outstanding online presence!
                  </p>
                  <section className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="/images/testimonials/dummy.png"
                      />
                    </div>
                    <section className="short">
                      <h3>Collin Mattew</h3>
                      <span>Client</span>
                    </section>
                  </section>
                </article>
              </SwiperSlide>
              <div className="owl-dots"></div>
            </Swiper>
          </article>
        </section>
      </section>
    </section>
  );
};
export default Testimonials;
