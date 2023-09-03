const TestimonialSwiper = ({ client }) => {
  return (
    <article className="list_inner">
      <img className="svg" src="/images/svg/quote.svg" alt="" />
      <p className="text">{client.testimonial}</p>
      <section className="details">
        <div className="image">
          <div className="main" data-img-url={client.image} />
        </div>
        <section className="short">
          <h3>{client.name}</h3>
          <span>{client.position}</span>
        </section>
      </section>
    </article>
  );
};
export default TestimonialSwiper;
