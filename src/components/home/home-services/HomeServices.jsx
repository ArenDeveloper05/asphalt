import { Link } from "react-router-dom";
import { homeServicesConfig } from "../../../config";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ROUTER } from "../../../router/router";

import HomeServicesItem from "./home-services-item/HomeServicesItem";

import "./HomeServices.scss";

const HomeServices = () => {
  return (
    <section className="home-services">
      <h1 className="section-title">
        <Link to={ROUTER.SERVICES_PAGE_ROUTE}>
          Услуги
          <MdKeyboardArrowRight />
        </Link>
      </h1>
      <div className="home-services-list">
        {homeServicesConfig.map(({ id, title, link, description }) => {
          return (
            <HomeServicesItem
              key={id}
              title={title}
              link={link}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HomeServices;
