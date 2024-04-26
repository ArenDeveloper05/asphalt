import { Link } from "react-router-dom";
import { servicesConfig } from "../../../config";

const ServicesContent = () => {
  return (
    <div className="services-content">
      {servicesConfig &&
        servicesConfig.map(({ id, title, img, link }) => {
          return (
            <div key={id} className="services-content-item">
              <div className="services-content-item-name">
                <Link to={link}>{title}</Link>
              </div>
              <div className="services-content-item-image">
                <img src={img} alt="services-img" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ServicesContent;
