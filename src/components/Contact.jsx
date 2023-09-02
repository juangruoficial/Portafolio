import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      // https://www.emailjs.com/
      console.log(mailData);
      emailjs
        .send(
          "service_qrz7o8c", // service id
          "template_klvlwnf", // template id
          mailData,
          "2NTg1G7fpXjx80TOA" // public api
        )
        .then(
          () => {
            setError(false);
            clearError();
            setMailData({
              name: "",
              email: "",
              message: "",
            });
          },
          (err) => {
            console.log(err.text.value);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
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
                  <form
                    className="contact_form"
                    id="contact_form"
                    autoComplete="off"
                    onSubmit={(e) => onSubmit(e)}
                  >
                    <p
                      className="returnmessage"
                      data-success="Your message has been received, We will contact you soon."
                    />
                    <div
                      className={error ? "empty_notice" : "returnmessage"}
                      style={{ display: error == null ? "none" : "block" }}
                    >
                      <span>
                        {error
                          ? "Please Fill Required Fields"
                          : "Your message has been received, We will contact you soon."}
                      </span>
                    </div>
                    <article className="first">
                      <ul>
                        <li>
                          <input
                            id="name"
                            name="name"
                            onChange={(e) => onChange(e)}
                            value={name}
                            type="text"
                            placeholder="Name"
                          />
                        </li>
                        <li>
                          <input
                            id="email"
                            type="text"
                            name="email"
                            onChange={(e) => onChange(e)}
                            value={email}
                            placeholder="Email"
                          />
                        </li>
                      </ul>
                    </article>
                    <article className="last">
                      <textarea
                        id="message"
                        placeholder="Message"
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                      />
                    </article>
                    <div className="button" data-position="left">
                      <input type="submit" value="Submit Message" />
                    </div>
                  </form>
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
