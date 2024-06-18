import BaseTitle from "../common/base-title/BaseTitle";
import HomeContact from "../home/home-contact/HomeContact";

import "./Prices.scss";

const Prices = () => {
  const props = {
    title:
      "Стоимость асфальтирования, ремонта дорог и укладки асфальтовой крошки в г. Сергиев Посад, Дмитров, Александров, Пушкино, Мытищи, Королев, Щелково",
    description: "",
  };
  return (
    <div className="prices">
      <BaseTitle title={props.title} />

      <div className="prices-tables">
        <div className="prices-tables-row">
          <h2>Бесплатные услуги</h2>

          <table>
            <tr>
              <td>Наименование работ</td>
            </tr>
            <tr>
              <td>Выезд замерщика на объект</td>
            </tr>
            <tr>
              <td>Консультация специалиста</td>
            </tr>
            <tr>
              <td>Составление сметы</td>
            </tr>
          </table>
        </div>
        <div className="prices-tables-row">
          <h2></h2>
          <table>
            <tr>
              <th>Цены на укладку асфальтовой крошки за м²</th>
              <th>Толщ.</th>
              <th>Цена</th>
            </tr>
            <tr>
              <td>Укладка асфальтовой крошки с материалом:</td>
              <td>см. 10</td>
              <td>170 Руб.</td>
            </tr>
            <tr>
              <td>Укладка асфальтовой крошки с материалом:</td>
              <td>см. 15</td>
              <td>205 Руб.</td>
            </tr>
            <tr>
              <td>Укладка асфальтовой крошки с материалом:</td>
              <td>см. 20</td>
              <td>270 Руб.</td>
            </tr>
          </table>
        </div>
        <div className="prices-tables-row">
          <h2></h2>
          <table>
            <tr>
              <th>Цены на ямочный ремонт за м²</th>
              <th>Толщ.</th>
              <th>Цена</th>
            </tr>
            <tr>
              <td>
                Ямочный ремонт с материалом — мелкозернистый асфальтобетон:
              </td>
              <td>см. 4-5</td>
              <td>645 Руб.</td>
            </tr>
            <tr>
              <td>Ямочный ремонт с материалом — песчаный асфальтобетон:</td>
              <td>см. 4-5</td>
              <td>675 Руб.</td>
            </tr>
            <tr>
              <td>
                Ямочный ремонт с материалом — крупнозернистый асфальтобетон:
              </td>
              <td>см. 4-5</td>
              <td>695 Руб.</td>
            </tr>
          </table>
        </div>

        <div className="prices-tables-row">
          <h2></h2>
          <table>
            <tr>
              <th>Цены на ремонт трещины, выбоины, колейности за м²</th>
              <th>Толщ.</th>
              <th>Цена</th>
            </tr>
            <tr>
              <td>
                Ремонт асфальта с материалом — мелкозернистый асфальтобетон:
              </td>
              <td>см. 4-5</td>
              <td>640 Руб.</td>
            </tr>
            <tr>
              <td>
                Ремонт асфальта с материалом — крупнозернистый асфальтобетон:
              </td>
              <td>см. 4-5</td>
              <td>695 Руб.</td>
            </tr>

            <tr>
              <td>
                Ремонт асфальта с материалом — щебеночно-мастичный
                асфальтобетон:
              </td>
              <td>см. 4-5</td>
              <td>575 Руб.</td>
            </tr>
          </table>
        </div>
        <div className="prices-tables-row">
          <h2></h2>
          <table>
            <tr>
              <th>Цены на асфальтирование дорожек за м²</th>
              <th>Толщ.</th>
              <th>Цена</th>
            </tr>
            <tr>
              <td>
                Асфальтирование дорожек с материалом — мелкозернистый
                асфальтобетон:
              </td>
              <td>см. 4-5</td>
              <td>395 Руб.</td>
            </tr>
            <tr>
              <td>
                Асфальтирование дорожек с материалом — песчаный асфальтобетон:
              </td>
              <td>см. 4-5</td>
              <td>425 Руб.</td>
            </tr>

            <tr>
              <td>
                Асфальтирование дорожек с материалом — крупнозернистый
                асфальтобетон:
              </td>
              <td>см. 4-5</td>
              <td>445 Руб.</td>
            </tr>
          </table>
        </div>
      </div>
      <HomeContact noTitle />
    </div>
  );
};

export default Prices;
