import { motion } from "framer-motion";
const LeftHome = ({ homeData }) => {
  return (
    <aside className="left">
      <section className="inner">
        <h3 className="hello">Hello {`I'm`}</h3>
        <h3 className="name">
          {homeData.firstName} {homeData.lastName}
        </h3>
        <h3 className="job">
          {homeData.designation} from {homeData.address}
        </h3>
        <p className="text">{homeData.bio}</p>
        <div className="buttons">
          <div className="button">
            <motion.a
              whileHover={{
                scale: 1.09,
                background: "linear-gradient(135deg, #FF6B6B 0%, #FFB72B 100%)",
              }}
              whileTap={{ scale: 0.7 }}
              transition={{ duration: 0.3 }}
              href="#contact"
            >
              Contact me
            </motion.a>
          </div>
          <div className="simple_button">
            <a className="anchor" href="#about">
              About Me
            </a>
          </div>
        </div>
      </section>
      <h3 className="stroke_1">{homeData.firstName}</h3>
      <h3 className="stroke_2">{homeData.lastName}</h3>
    </aside>
  );
};
export default LeftHome;
