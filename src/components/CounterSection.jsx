import { lineBreak } from "../utilits/utilits.js";
import Counter from "./Counter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const counterData = [
  { smallVlaue: true, value: 5, name: "Digital\nProducts" },
  { smallVlaue: true, value: 1, name: "Open Source\nProjects" },
  { smallVlaue: false, value: 30, name: "Lines of \nCode" },
];
const CounterSection = () => {
  const [ref, inView] = useInView();
  return (
    <section className="section">
      <section className="counter_section">
        <section className="container">
          <section className="counter_list">
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
                  <section className="list_inner">
                    <div className="wrapper">
                      <article className="value">
                        <span className="abs">
                          <Counter end={counter.value} />
                          {counter.smallVlaue ? (
                            <label className="small">+</label>
                          ) : (
                            <label className="big">K</label>
                          )}
                        </span>
                      </article>
                      <div className="text">
                        <h3
                          dangerouslySetInnerHTML={lineBreak(counter.name)}
                        ></h3>
                      </div>
                    </div>
                  </section>
                </motion.li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};
export default CounterSection;
