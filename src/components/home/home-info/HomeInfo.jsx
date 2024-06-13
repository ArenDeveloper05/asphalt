import BaseTitle from "../../common/base-title/BaseTitle";

import "./HomeInfo.scss";

const HomeInfo = () => {
  const props = {
    title:
      "Строительство, асфальтирование и ремонт дорог в Сергиевом Посаде,Дмитрове, Александрове, Пушкино, Мытищи, Щелково",
    description:
      "Компания 'А-СПБ' основана с 2014 года. Мы работаем в сфере дорожного строительства уже более 10 лет. За годы нашей деятельности нами были проведены более: 140 объектов, 55 000 квадратных метров асфальта, нанесено 320 000 п.м. дорожной разметки на заасфальтированных нами дорог, по 2012г. и 2020г. В нашем штате более 30-ти специалистов, и парк спец-техники более 15 единиц. Мы успешно завершили свои проекты в таких городах как: в Пушкино, Королёв, Мытищии т.д.",
  };
  return (
    <section className="home-info">
      <BaseTitle title={props.title} description={props.description} />
    </section>
  );
};

export default HomeInfo;
