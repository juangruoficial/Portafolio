import Accordion from "./Accordion";

const Process = () => {
  return (
    <section className="section">
      <div className="process">
        <div className="container">
          <div className="process_inner">
            <article className="left">
              <section className="main_title" data-text-align="left">
                <span>Working to make difference</span>
                <h3>Real Passion to Create Amazing Things</h3>
                <p>
                  With unwavering passion, I craft exceptional experiences that
                  push boundaries and resonate deeply. My portfolio reflects a
                  commitment to innovative design, fueled by a genuine
                  enthusiasm for creating amazing things that leave a lasting
                  impact.
                </p>
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
