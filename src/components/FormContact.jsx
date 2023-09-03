import useFormContact from "../hooks/useFormContact";

const FormContact = () => {
  const { name, email, message, error, onChange, onSubmit } = useFormContact();

  return (
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
  );
};
export default FormContact;
