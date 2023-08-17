import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup.jsX";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const serviceData = [
  {
    name: "Desktop Application",
    icon: "/public/images/svg/cpu.svg",
    img: "/public/images/service/webapplication.webp",
    description: [
      "Within the realm of web design, Juan Cruz stands as a distinguished entity, fueled by my creative prowess. As a designer, I strive to construct avant-garde and effective websites that encapsulate the essence of each unique brand. Through my designs, I elevate conversion rates and unlock revenue potential, playing a pivotal role in business expansion and goal attainment.",
      "In the contemporary digital landscape, a brand's virtual façade—the website—serves as the inaugural point of interaction between consumers and the essence of a venture. An astonishing 95 percent of initial impressions are intertwined with the nuances of web design. This profound insight underscores the transformative potential of web design services, capable of significantly shaping a company's financial trajectory.",
      "Against this backdrop, an increasing number of enterprises are embarking on a journey to redefine their virtual presence. Many are also forging partnerships with Juan Cruz—a design portfolio that has orchestrated the realization of more than $2.4 billion in revenue for diverse clients. My creative journey is punctuated by a collection of over 50 prestigious web design awards, attesting to my unwavering confidence in my ability to conceive bespoke websites that are instrumental in driving sales and achieving business success.",
    ],
  },
  {
    name: "Mobile Application",
    icon: "/public/images/svg/phone.svg",
    img: "/public/images/service/mobileapplication.webp",
    description: [
      "Diving into the dynamic realm of mobile app craftsmanship, Juan Cruz emerges as a trailblazer, committed to sculpting immersive and transformative applications. With an artful fusion of design and functionality, I encapsulate the very essence of your brand, curate captivating user experiences, boost conversion dynamics, and open new avenues for revenue generation. Through my creations, I empower businesses to expand their horizons, break barriers, and achieve their loftiest aspirations.",
      "In the contemporary digital arena, the mobile app serves as the ultimate gateway, seamlessly connecting users with your digital vision. Remarkably, nearly 95 percent of a user's initial perception hinges on the app's design and ease of use. This fact underscores the pivotal role that app design and development play in shaping not only user interactions but the overall trajectory of your project.",
      "Guided by the potential for transformative change, I enthusiastically embrace the challenge of reshaping conventional app paradigms, driven by an unyielding commitment to aesthetics and functionality. Juan Cruz's mobile app portfolio stands as a testament to my prowess in infusing innovation with tangible outcomes—contributing to a cumulative revenue of over $2.4 billion across an array of ventures. Backed by a distinguished collection of more than 50 industry honors, I hold a steadfast belief in my capacity to engineer a bespoke mobile application. This application effortlessly harmonizes with your brand identity, fueling unparalleled engagement, and propelling sales for your unique enterprise.",
    ],
  },
  {
    name: "Website Development",
    icon: "/public/images/svg/web.svg",
    img: "/public/images/service/webdevelopment.jpg",
    description: [
      "Web development is the art of creating interactive websites using languages like HTML, CSS, and JavaScript. It involves designing user interfaces and experiences while ensuring responsiveness across devices.",
      "Web development comprises two main aspects: front-end and back-end. Front-end focuses on visual elements, while back-end handles server-side scripting and database management, creating a seamless user experience.",
      "Web development is dynamic, driven by trends like PWAs and SPAs. Developers use frameworks like React and Angular for efficient coding. Mobile responsiveness and SEO are vital for modern websites, shaping how users engage with online content.",
    ],
  },
  {
    name: "Game Development",
    icon: "/public/images/svg/star.svg",
    img: "/public/images/service/gamedevelopment.jpg",
    description: [
      "Game development is a thrilling fusion of creativity and technology, where imaginative concepts evolve into captivating interactive experiences. Through a harmonious blend of art and programming, game developers craft virtual worlds that engage players on unprecedented levels. This process involves designing gameplay mechanics, characters, and environments, all orchestrated to create a seamless and immersive adventure.",
      "Central to game development are two key components: gameplay engineering and artistic design. The former encompasses the intricate coding of game mechanics, physics simulations, and artificial intelligence using languages like C++, C#, or Python. Meanwhile, the latter focuses on visual and auditory elements, including stunning graphics, dynamic animations, and captivating soundscapes. Collaboration between developers, artists, and sound engineers is paramount to achieve a harmonious and engaging final product.",
      "Game development is an ever-evolving landscape, shaped by innovative trends and technologies. Emerging platforms, virtual reality (VR), and augmented reality (AR) experiences are pushing the boundaries of what's possible. Developers harness powerful engines like Unity or Unreal to streamline the creation process, while prioritizing player engagement through immersive storytelling and intuitive gameplay. With each line of code and stroke of design, game developers orchestrate experiences that transport players into extraordinary realms of fun and adventure.",
    ],
  },
];
const Service = () => {
  const [ref, inView] = useInView();
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="section" id="service">
        <div className="service">
          <div className="container">
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <motion.li
                    ref={ref}
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: inView ? 1 : 0,
                      y: inView ? 0 : 10,
                      scale: inView ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div className="list_inner">
                      <img className="svg" src={service.icon} alt="" />
                      <h3 className="title">{service.name}</h3>
                      <p className="text">
                        {service.description[1].substring(0, 138)}.
                      </p>
                      <a
                        className="full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <img
                        className="popup_service_image"
                        src="/public/images/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
