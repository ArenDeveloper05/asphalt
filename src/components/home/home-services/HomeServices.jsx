import { homeServicesConfig } from "../../../config";
import HomeServicesItem from "./home-services-item/HomeServicesItem";

import "./HomeServices.scss";

const HomeServices = () => {
  return (
    <section className="home-services">
      <h1 className="section-title">Услуги</h1>
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
