import { useState } from "react";
import emailjs from "emailjs-com";

const useFormContact = () => {
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
  return {
    mailData,
    error,
    onChange,
    onSubmit,
    name,
  };
};
export default useFormContact;
