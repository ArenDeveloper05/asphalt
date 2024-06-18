import { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { TfiClose } from "react-icons/tfi";

import MobileHeaderMenu from "./mobile-header-menu/MobileHeaderMenu";

import "./MobileHeader.scss";

const MobileHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.querySelector("html").style.overflow = mobileOpen
      ? "hidden"
      : "auto";
  }, [mobileOpen]);

  return (
    <>
      <div
        className="mobile-header"
        onClick={() => {
          setMobileOpen((prev) => !prev);
        }}
      >
        {mobileOpen ? <TfiClose /> : <TiThMenu />}
      </div>
      <MobileHeaderMenu mobileOpen={mobileOpen} />
    </>
  );
};

export default MobileHeader;
