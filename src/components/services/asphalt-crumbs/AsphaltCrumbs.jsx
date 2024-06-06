import BaseTitle from "../../common/base-title/BaseTitle";
import HomeContact from "../../home/home-contact/HomeContact";

import "./AsphaltCrumbs.scss";

const AsphaltCrumbs = () => {
  const props = {
    title: "Доставка и укладка асфальтовой крошки",
    description:
      "Асфальтная крошка это вторичное сырье, полученное после срезки старого асфальта, - универсальный материал для строительства второстепенных дорог и площадок города и частного сектора, а также производственных зон. Применение укладки асфальтовой крошки в Сергиевом Посаде позволяет решить целый ряд проблем, затрачивая минимум денежных средств. Асфальтная крошка подходит как для строительства новых городских дорог в качестве основания, так и для отсыпки дорог с низкой транспортной нагрузкой и пешеходных зон.",
  };

  return (
    <div className="asphalt-crumbs">
      <BaseTitle title={props.title} description={props.description} />
      <div className="prices-tables">
        <table>
          <tr>
            <td>
              Устройство покрытия из асфальтной крошки 10 см с уплотнением
              катком 4 т
            </td>
            <td>
              м<sup>2</sup>
            </td>
            <td>190</td>
          </tr>
          <tr>
            <td>Обработка покрытия из асфальтной крошки битумной эмульсией</td>
            <td>
              м<sup>2</sup>
            </td>
            <td>25</td>
          </tr>
        </table>
      </div>
      <HomeContact noTitle />
    </div>
  );
};

export default AsphaltCrumbs;
