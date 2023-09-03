import Accordion from "./Accordion";
import { processData } from "../shared/constProcessData";

const Process = () => {
  return (
    <section className="section">
      <div className="process">
        <div className="container">
          <div className="process_inner">
            <article className="left">
              <section className="main_title" data-text-align="left">
                <span>{processData.title}</span>
                <h3>{processData.subTitle}</h3>
                <p>{processData.description}</p>
              </section>
            </article>
            <section className="right">
              <div className="acc_holder">
                <Accordion />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
