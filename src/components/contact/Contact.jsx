import { Link } from "react-router-dom";
import HomeContact from "../home/home-contact/HomeContact";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <HomeContact noTitle />
      <div className="contact-information">
        <div className="contact-information-links">
          <div className="contact-information-links-social">
            <a href="https://wa.me/79653353568" className="wp">
              Мы в WhatsApp
            </a>
            <a href="mailto:masiskhlghatyan@gmail.com" className="email">
              masiskhlghatyan@gmail.com
            </a>
          </div>
          <p>
            <a href="tel:+79653353568">Тел. +7 (905)-755-29-19 </a>
          </p>
        </div>
        <div className="contact-information-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35768.57573480478!2d37.825093075513244!3d55.92274571806369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b52d8cea784673%3A0x6d7dc3b16fb62c63!2z0JrQvtGA0L7Qu9GR0LIsINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2sam!4v1713122145521!5m2!1sru!2sam"
            width="600"
            title="map"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
