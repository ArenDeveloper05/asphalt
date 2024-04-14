import { useRef, useState } from "react";
import { notifyError, notifySuccess } from "../../../utils/toast/toast";
import { ToastContainer } from "react-toastify";

import emailjs from "@emailjs/browser";

import "./HomeContact.scss";

const HomeContact = ({ noTitle }) => {
  const [values, setValues] = useState({ tel: "", email: "", message: "" });
  const form = useRef();

  function handleChange(e) {
    setValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function resetForm() {
    setValues({
      tel: "",
      email: "",
      message: "",
    });
  }
  return (
    <div className="home-contact">
      {!noTitle && <h1>Обратная связь</h1>}

      <form
        className="home-contact-form"
        ref={form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(values);
          emailjs
            .sendForm("service_gy3nlc6", "template_ypytqf1", form.current, {
              publicKey: "l6rTJV2xckLCOian9",
            })
            .then(() => {
              notifySuccess("Сообщение отправлено");
              resetForm();
            })
            .catch((err) => {
              notifyError("Сообщение не отправлено");
            });
        }}
      >
        <div className="home-contact-form-row">
          <label htmlFor="homeContactTel">Телефон </label>
          <input
            type="text"
            id="homeContactTel"
            name="tel"
            required
            value={values.tel}
            onChange={handleChange}
          />
        </div>
        <div className="home-contact-form-row">
          <label htmlFor="homeContactMail">Адрес электронной почты</label>
          <input
            type="email"
            id="homeContactMail"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="home-contact-form-row">
          <label htmlFor="homeContactMessage">
            Опишите пожалуйста вид требуемых работ, площадь и сроки выполнения
          </label>
          <textarea
            type="text"
            id="homeContactMessage"
            name="message"
            value={values.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button>Отправить</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default HomeContact;
