import BaseTitle from "../../common/base-title/BaseTitle";
import HomeContact from "../../home/home-contact/HomeContact";
import "./RepairingRoads.scss";

const RepairingRoads = () => {
  const props = {
    title:
      " Ямочный ремонт дорог Сергиев Посад, Дмитров, Александров, Пушкино, Мытищи, Щелково, Королев",
    description:
      "Каким бы качественное покрытие, рано или поздно оно будет нуждаться в ремонте, где одним из самых распространенных методов является ямочный ремонт дорог.Ямочный ремонт дорог — метод восстановления дорожного покрытия. При большом разрушении используют метод реставрации полотна по всей его ширине - фрезерование старого асфальта и укладка нового. Если участки разрушения небольшие, то проводят локальный ямочный ремонт на определенных участках.Мы сделаем ямочный ремонт дорог в Сергиевом Посаде по самым выгодным ценам:",
  };
  return (
    <div className="repairing-roads">
      <BaseTitle title={props.title} description={props.description} />
      <div className="repairing-roads-tables pricing-tables">
        <table>
          <tr>
            <td>Нарезка швов в асфальте алмазными дисками</td>
            <td>п.м.</td>
            <td>75</td>
          </tr>
          <tr>
            <td>
              Демонтаж старого асфальта толщиной 5 см с вывозом скола на
              утилизацию
            </td>
            <td>
              м<sup>2</sup>
            </td>
            <td>110</td>
          </tr>
          <tr>
            <td>Обработка основания и кромки карты битумной эмульсией</td>
            <td>
              м<sup>2</sup>
            </td>
            <td>30</td>
          </tr>
          <tr>
            <td>
              Укладка асфальта в картах из мелкозернистой смеси толщиной 5 см
            </td>
            <td>
              м<sup>2</sup>
            </td>
            <td>550</td>
          </tr>
        </table>
      </div>
      <HomeContact noTitle />
    </div>
  );
};

export default RepairingRoads;
