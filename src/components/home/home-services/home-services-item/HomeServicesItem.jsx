import { Link } from "react-router-dom";
import { ROUTER } from "../../../../router/router";

const HomeServicesItem = ({ title, description, link }) => {
  return (
    <Link to={link ? link : ROUTER.HOME_PAGE_ROUTE}>
      <div className="home-services-item">
        <h2>{title && title}</h2>
        <div className="home-services-item-description">
          {description && description}
        </div>
      </div>
    </Link>
  );
};

export default HomeServicesItem;
