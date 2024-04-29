import BaseTitle from "../../common/base-title/BaseTitle";
import HomeContact from "../../home/home-contact/HomeContact";

import "./CreatingRoads.scss";

const CreatingRoads = () => {
  const props = {
    title:
      "Строительство дорог различного назначения в г. Сергиев Посад, Дмитров, Александров, Пушкино, Мытищи, Щелково",
    description:
      "Начнем с того, что Дор-Строй-Асфальт принимает непосредственное участие в реализации важных проектов для нашего региона в области дорожного строительства. Мы начинали свою трудовую историю как небольшая команда всего в несколько человек. Сегодня мы выполняем работы не только в Сергиевом Посаде, но и в ряде близлежащих городах.",
  };

  return (
    <div className="creating-roads">
      <BaseTitle title={props.title} description={props.description} />

      <div className="prices-tables">
        <div className="prices-tables-row">
          <h2>
            Представляем Вам цены на основные работы по строительству дорог:
          </h2>
        </div>
        <table>
          <tr>
            <td>
              <span>
                Выемка грунта под проектные отметки с последующим вывозом на
                утилизацию
              </span>
            </td>
            <td>
              <span>
                м<sup>3</sup>
              </span>
            </td>
            <td>
              <span>700</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                Устройство основания 10 см из среднезернистого карьерного песка
              </span>
            </td>
            <td>
              <span>
                м<sup>2</sup>
              </span>
            </td>
            <td>
              <span>120</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Укладка геотекстиля Дорнит М-300</span>
            </td>
            <td>
              <span>
                м<sup>2</sup>
              </span>
            </td>
            <td>
              <span>80</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                Устройство основания 10 см из известнякового щебня ф-20/40 М-600
              </span>
            </td>
            <td>
              <span>
                м<sup>2</sup>
              </span>
            </td>
            <td>
              <span>220</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                Устройство основания 10 см из жестко укатываемого бетона В-7,5
              </span>
            </td>
            <td>
              <span>
                м<sup>2</sup>
              </span>
            </td>
            <td>
              <span>450</span>
            </td>
          </tr>
        </table>
      </div>
      <HomeContact noTitle />
    </div>
  );
};

export default CreatingRoads;
