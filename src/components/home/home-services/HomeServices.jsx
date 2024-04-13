import { homeServicesConfig } from "../../../config";
import "./HomeServices.scss";
import HomeServicesItem from "./home-services-item/HomeServicesItem";

const HomeServices = () => {
  return (
    <section className="home-services">
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
    </section>
  );
};

export default HomeServices;
