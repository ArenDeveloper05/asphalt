import BaseTitle from "../common/base-title/BaseTitle";
import ServicesContent from "./services-content/ServicesContent";

import "./Services.scss";

const Services = () => {
  const props = {
    title:
      "Дорожные услуги в Сергиевом Посаде, Пушкино, Дмитров, Мытищи,Александров, Щелково",
    description:
      "Начав работать 10 лет назад как небольшая бригада, мы прошли все этапы становления, и сейчас компания имеет собственный парк современной техники, для которого разрешимы практически любые задачи. Мы умеем пользоваться передовыми технологиями, ценим наших профессионалов, которые имеют большой опыт в дорожном строительстве. Мы не экономим на качестве и ведем открытые и честные взаимодействия с клиентами, а сокращения сроков и снижения издержек добиваемся тем, что работаем без посредников, все производственные процессы контролируем сами.",
  };

  return (
    <div className="services">
      <BaseTitle title={props.title} description={props.description} />

      <ServicesContent />
    </div>
  );
};

export default Services;
