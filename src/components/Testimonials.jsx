import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../utilits/sliderProps.js";
import { dataImage } from "../utilits/utilits.js";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialSwiper from "./TestimonialSwiper.jsx";
import { testimonialData } from "../shared/constTestimonialData";
const Testimonials = () => {
  useEffect(() => {
    dataImage();
  }, []);

  return (
    <section className="section">
      <section className="testimonials">
        <section className="container">
          <article className="main_title" data-text-align="center">
            <span>{testimonialData.title}</span>
            <h3>{testimonialData.subTitle}</h3>
            <p>{testimonialData.description}</p>
          </article>

          <article className="testimonials_list">
            <Swiper
              {...testimonialsSlider}
              className="owl-carousel owl-theme owl-loaded"
            >
              {testimonialData.clients.map((client) => (
                <SwiperSlide key={client.id}>
                  <TestimonialSwiper client={client} />
                </SwiperSlide>
              ))}
              <div className="owl-dots"></div>
            </Swiper>
          </article>
        </section>
      </section>
    </section>
  );
};
export default Testimonials;
