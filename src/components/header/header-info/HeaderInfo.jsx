import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

import "./HeaderInfo.scss";

const HeaderInfo = () => {
  return (
    <div className="header-info">
      <p>
        г. Пушкино,
        <FaLocationDot />
      </p>

      <p>
        ул. Грибоедова, 7
        <FaLocationDot />
      </p>

      <a href="tel:+79057552919">
        Тел. +7 (905)-755-29-19 +79057552919 <BsFillTelephoneInboundFill />
      </a>
    </div>
  );
};

export default HeaderInfo;
