import BaseRow from "../../common/base-row/BaseRow";
import BaseTitle from "../../common/base-title/BaseTitle";
import HomeContact from "../../home/home-contact/HomeContact";

import g2 from "../../../assets/images/home/gallery/g2.jpg";
import g4 from "../../../assets/images/home/gallery/g4.jpg";

import "./AsphaltingRoads.scss";

const AsphaltingRoads = () => {
  const props = {
    title: " Асфальтирование дорог и укладка асфальта",
    description:
      "При расчете количества и вида необходимого материала строительства дорог и других объектов следует определиться с составом асфальтовой смеси: толщиной щебеночного слоя и количеством слоев асфальта, так как от этого будет зависеть срок службы дорожного покрытия. Основной критерий – расчетная рабочая нагрузка.Состав смеси в зависимости от назначения покрытия:пешеходные и периодические транспортные нагрузки (тротуары, придомовая территория, парковочные места) – щебеночное основание 10-15 см, 1 асфальтовый слой – 4-5 см;постоянное движение транспорта и грузовых автомобилей (дороги, АЗС, территории промышленных предприятий или придорожных предприятий общественного питания) – щебеночное основание – 25-35 см, 2-3 слоя асфальта.",
  };

  return (
    <div className="asphalting-roads">
      <BaseTitle title={props.title} description={props.description} />
      <BaseRow imagesArr={[g2, g4]} />
      <div className="asphalting-roads-tables prices-tables">
        <table>
          <tr>
            <td>
              Асфальтирование дорог с материалом — мелкозернистый асфальтобетон:
            </td>
            <td>___Толщ., см. 4-5</td>
            <td>___Цена 395 Руб.</td>
          </tr>
          <tr>
            <td>
              Асфальтирование дорог с материалом — песчаный асфальтобетон:
            </td>
            <td>___Толщ., см. 4-5</td>
            <td>___Цена 425 Руб.</td>
          </tr>
          <tr>
            <td>
              Асфальтирование дорог с материалом — крупнозернистый
              асфальтобетон:
            </td>
            <td>___Толщ., см. 4-5</td>
            <td>___Цена 445 Руб.</td>
          </tr>
        </table>
      </div>

      <HomeContact noTitle />
    </div>
  );
};

export default AsphaltingRoads;
