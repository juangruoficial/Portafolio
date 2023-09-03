import FormContact from "./FormContact";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <section className="contact">
        <div className="container">
          <div className="contact_inner">
            <article className="main_title" data-text-align="left">
              <span>{`Don't`} be shy</span>
              <h3>Drop Me a Line</h3>
            </article>
            <section className="in">
              <section className="left ">
                <section className="fields">
                  <FormContact />
                </section>
              </section>
              <section className="right">
                <ul>
                  <li>
                    <section className="list_inner">
                      <div className="icon">
                        <i className="icon-location orangeText" />
                      </div>
                      <article className="short">
                        <h3>Address</h3>
                        <span>Somewhere in world</span>
                      </article>
                    </section>
                  </li>
                  <li>
                    <article className="list_inner">
                      <div className="icon">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href="#">cruz9606@gmail.com</a>
                        </span>
                      </div>
                    </article>
                  </li>
                  <li>
                    <article className="list_inner">
                      <div className="icon">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>+573108322459</span>
                      </div>
                    </article>
                  </li>
                </ul>
              </section>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Contact;
