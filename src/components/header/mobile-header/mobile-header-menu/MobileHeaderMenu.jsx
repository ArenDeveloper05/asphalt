import { Link, useNavigate } from "react-router-dom";
import { navConfig } from "../../../../config";
import { useState } from "react";

import { IoIosArrowDropdownCircle } from "react-icons/io";

import "./MobileHeaderMenu.scss";

const MobileHeaderMenu = ({ mobileOpen }) => {
  const navigate = useNavigate();
  const [nestedOpen, setNestedOpen] = useState(false);

  return (
    <div
      className="mobile-menu"
      style={!mobileOpen ? { transform: "translateX(-100%)" } : {}}
    >
      <ul>
        {navConfig &&
          navConfig.map(({ id, title, link, children }) => {
            return (
              <li
                key={id}
                style={{
                  position: "relative",
                }}
                onClick={() => {
                  navigate(link);
                }}
              >
                <Link to={link}>{title}</Link>
                {children.length !== 0 && (
                  <IoIosArrowDropdownCircle
                    style={{
                      position: "absolute",
                      right: "6px",
                      top: "6px",
                      color: "white",
                      fontSize: "34px",
                      transform: nestedOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setNestedOpen((prev) => !prev);
                    }}
                  />
                )}
                {children &&
                  nestedOpen &&
                  children.map(({ id, title, link }) => {
                    return (
                      <li
                        key={id}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(link);
                        }}
                      >
                        <Link to={link}>{title}</Link>
                      </li>
                    );
                  })}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MobileHeaderMenu;
