import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { TfiClose } from "react-icons/tfi";

import MobileHeaderMenu from "./mobile-header-menu/MobileHeaderMenu";

import "./MobileHeader.scss";

const MobileHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(true);

  return (
    <>
      <div
        className="mobile-header"
        onClick={() => {
          setMobileOpen((prev) => !prev);
          document.querySelector("html").style.overflow = mobileOpen
            ? "hidden"
            : "auto";
        }}
      >
        {mobileOpen ? <TiThMenu /> : <TfiClose />}
      </div>
      <MobileHeaderMenu mobileOpen={mobileOpen} />
    </>
  );
};

export default MobileHeader;
