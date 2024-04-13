import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

import "./HeaderInfo.scss";

const HeaderInfo = () => {
  return (
    <div className="header-info">
      <p>
        Сергиев Посад
        <FaLocationDot />
      </p>

      <p>
        Пограничная, д 7
        <FaLocationDot />
      </p>

      <a href="tel:+79653353568">
        Тел. +7(965)-335-35-68 <BsFillTelephoneInboundFill />
      </a>
    </div>
  );
};

export default HeaderInfo;
