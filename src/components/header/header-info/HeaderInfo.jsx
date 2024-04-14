import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

import "./HeaderInfo.scss";

const HeaderInfo = () => {
  return (
    <div className="header-info">
      <p>
        Московская область
        <FaLocationDot />
      </p>

      <p>
        город Королёв
        <FaLocationDot />
      </p>

      <a href="tel:+79057552919">
        Тел. +7 (905)-755-29-19 <BsFillTelephoneInboundFill />
      </a>
    </div>
  );
};

export default HeaderInfo;
