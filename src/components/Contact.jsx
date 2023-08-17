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
    <div className="section" id="contact">
      <div className="contact">
        <div className="container">
          <div className="contact_inner">
            <div className="main_title" data-text-align="left">
              <span>{`Don't`} be shy</span>
              <h3>Drop Me a Line</h3>
            </div>
            <div className="in">
              <div className="left ">
                <div className="fields">
                  <form
                    className="contact_form"
                    id="contact_form"
                    autoComplete="off"
                    onSubmit={(e) => onSubmit(e)}
                  >
                    <div
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
                    <div className="first">
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
                    </div>
                    <div className="last">
                      <textarea
                        id="message"
                        placeholder="Message"
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                      />
                    </div>
                    <div className="button" data-position="left">
                      <input type="submit" value="Submit Message" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon">
                        <i className="icon-location orangeText" />
                      </div>
                      <div className="short">
                        <h3>Address</h3>
                        <span>Somewhere in world</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href="#">cruz9606@gmail.com</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>+573108322459</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="shape moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
            <div
              className="shape_2 moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
