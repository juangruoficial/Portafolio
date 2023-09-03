import { features_list } from "../shared/constFeatureList";
const Features = () => {
  return (
    <section className="features">
      <section className="container">
        <section className="features_list">
          <ul>
            {features_list.map((feature, i) => (
              <li key={i}>
                <div className="list_inner">
                  <div className="short">
                    <div className="title">
                      <span>{`0${i + 1}`}</span>
                      <h3>{feature.title}</h3>
                    </div>
                    <div className="icon">
                      <img className="svg" src={feature.icon} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <p>{feature.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Features;
