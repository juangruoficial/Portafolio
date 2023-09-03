const PortafolioCardProject = ({ i, project }) => {
  return (
    <li key={i}>
      <section className="list_inner">
        <div className="background_image" data-img-url={project.image} />
        <div className="content">
          <article className="details">
            <span className="category">
              <a href="#">{project.category}</a>
            </span>
            <h3 className="title">
              <a href="#">{project.title}</a>
            </h3>
            <span className="view_project">
              <a href="#">
                View Project <i className="icon-right-big" />
              </a>
            </span>
          </article>
        </div>
        <div className="overlay" />
        <a target="blank" className="full_link popup-page" href={project.url} />
      </section>
    </li>
  );
};
export default PortafolioCardProject;
