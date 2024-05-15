import BaseTitle from "../../common/base-title/BaseTitle";
import HomeContact from "../../home/home-contact/HomeContact";

import "./AsphaltingRoads.scss";

const AsphaltingRoads = () => {
  const props = {
    title: " Асфальтирование дорог и укладка асфальта",
    description:
      "сфальтирование дорог – самый распространенный, практичный и надежный способ устройства дорожного покрытия. Конечно, такие работы должны выполнять специалистами с определенными знаниями и большим опытом и соблюдения ими стандартов дорожного строительства.Цены на работы по асфальтированию указаны с учетом стоимости материалов в Сергиево-Посадском районе",
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
