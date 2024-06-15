import BaseRow from "../../common/base-row/BaseRow";
import BaseTitle from "../../common/base-title/BaseTitle";
import HomeContact from "../../home/home-contact/HomeContact";

import g7 from "../../../assets/images/home/gallery/g7.jpg";
import g10 from "../../../assets/images/home/gallery/g10.jpg";

import "./RepairingRoads.scss";

const RepairingRoads = () => {
  const props = {
    title:
      " Ямочный ремонт дорог Сергиев Посад, Дмитров, Александров, Пушкино, Мытищи, Щелково, Королев",
    description:
      "Компания 'РЕМОНТ-ДОРСТРОЙ' уже мы оказываем полный спектр мероприятий по ремонту дорожного полотна. Наши специалисты выполняют как и мелкий ямочный ремонт, так и полноценный капитальный ремонт дорожного полотна.Ямочный ремонт не является панацеей, однако он поможет предотвратить множество проблем вызванных плохим качеством дорожного полотна. Дорожные ямы одинаково опасны для всех участников дорожного движения.Мы предлагаем вам асфальтирование и ямочный ремонт дорог в оговоренные сроки. Вы всегда можете рассчитывать на выполнение работ по высоким стандартам качества, а наша техническая оснащенность позволяет выполнять качественные ремонтные работы любой сложности, а так же снизить стоимость на ремонт асфальта.",
  };
  return (
    <div className="repairing-roads">
      <BaseTitle title={props.title} description={props.description} />
      <BaseRow imagesArr={[g7, g10]} />
      <div className="repairing-roads-tables prices-tables">
        <table>
          <tr>
            <td>Ямочный ремонт с материалом — мелкозернистый асфальтобетон:</td>
            <td>___Толщ., см. 4-5</td>
            <td>___Цена 645 Руб.</td>
          </tr>
          <tr>
            <td>Ямочный ремонт с материалом — песчаный асфальтобетон:</td>
            <td>___Толщ., см. 4-5</td>
            <td>___Цена 675 Руб.</td>
          </tr>
          <tr>
            <td>
              Ямочный ремонт с материалом — крупнозернистый асфальтобетон:
            </td>
            <td>___Толщ., см. 4-5</td>
            <td>___Цена 695 Руб.</td>
          </tr>
        </table>
      </div>
      <HomeContact noTitle />
    </div>
  );
};

export default RepairingRoads;
