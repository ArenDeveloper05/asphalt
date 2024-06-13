import BaseTitle from "../../common/base-title/BaseTitle";
import HomeContact from "../../home/home-contact/HomeContact";

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
      <div className="asphalting-roads-tables prices-tables">
        <table>
          <tr>
            <td>Асфальтирование 5 см из крупнозернистой смеси</td>
            <td>
              м<sup>2</sup>
            </td>
            <td>420</td>
          </tr>
          <tr>
            <td>Асфальтирование 5 см из мелкозернистой смеси</td>
            <td>
              м<sup>2</sup>
            </td>
            <td>410</td>
          </tr>
          <tr>
            <td>Асфальтирование&nbsp;5 см из песчаной смеси</td>
            <td>
              м<sup>2</sup>
            </td>
            <td>390</td>
          </tr>
          <tr>
            <td>Асфальтирование&nbsp;5 см из ЩМА</td>
            <td>
              м<sup>2</sup>
            </td>
            <td>750</td>
          </tr>
        </table>
      </div>

      <HomeContact noTitle />
    </div>
  );
};

export default AsphaltingRoads;
