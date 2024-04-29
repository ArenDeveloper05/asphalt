import BaseTitle from "../common/base-title/BaseTitle";
import ServicesContent from "./services-content/ServicesContent";

import "./Services.scss";

const Services = () => {
  const props = {
    title:
      "Дорожные услуги в Сергиевом Посаде, Пушкино, Дмитров, Мытищи,Александров, Щелково",
    description:
      "Дор-Строй-Асфальт уже более 10 лет оказывает дорожные услуги, обеспечивая высокое качество и минимальные сроки работ для наших клиентов в Сергиевом Посаде и соседних районах. Благодаря высококвалифицированному персоналу и наличии своей дорожно-строительной технике, мы оказываем качественные дорожные услуги. За время деятельности нашей фирмы более 30 компаний оценили нашу работу в таких направлениях, как;",
  };

  return (
    <div className="services">
      <BaseTitle title={props.title} description={props.description} />

      <ServicesContent />
    </div>
  );
};

export default Services;
