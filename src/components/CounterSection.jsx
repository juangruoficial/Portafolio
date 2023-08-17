import { lineBreak } from "../utilits/utilits.js";
import Counter from "./Counter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const counterData = [
  { smallVlaue: true, value: 2, name: "Digital\nProducts" },
  { smallVlaue: true, value: 1, name: "Open Source\nProjects" },
  { smallVlaue: false, value: 6, name: "Lines of \nCode" },
];
const CounterSection = () => {
  const [ref, inView] = useInView();
  return (
    <div className="section">
      <div className="counter_section">
        <div className="container">
          <div className="counter_list">
            <ul>
              {counterData.map((counter, i) => (
                <motion.li
                  key={i}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 20,
                    scale: inView ? 1 : 0.65,
                  }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <div className="list_inner">
                    <div className="wrapper">
                      <div className="value">
                        <span className="abs">
                          <Counter end={counter.value} />
                          {counter.smallVlaue ? (
                            <label className="small">+</label>
                          ) : (
                            <label className="big">K</label>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <h3
                          dangerouslySetInnerHTML={lineBreak(counter.name)}
                        ></h3>
                      </div>
                    </div>
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
  );
};
export default CounterSection;
