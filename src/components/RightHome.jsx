import Counter from "./Counter";

const RightHome = ({ homeData }) => {
  return (
    <aside className="right">
      <div className="image">
        <img src="/images/thumbs/53-61.jpg" alt="" />
        <div className="main" data-img-url={homeData.img} />
        <span className="win">
          <img src="/images/svg/award.svg" alt="" className="svg" id="award" />
        </span>
        <div className="numbers year">
          <div className="wrapper">
            <h3>
              <Counter end={homeData.numberofyear} />
            </h3>
            <span className="item_name">
              Years of
              <br />
              Success
            </span>
          </div>
        </div>
        <div className="numbers project">
          <div className="wrapper">
            <h3>
              <Counter end={homeData.numberOfProject} />
              <span className="extra">+</span>
            </h3>
            <span className="item_name">
              Projects
              <br />
              Completed
            </span>
          </div>
        </div>
        <span className="circle anim_circle">
          <img src="#" alt="" />
        </span>
      </div>
    </aside>
  );
};
export default RightHome;
