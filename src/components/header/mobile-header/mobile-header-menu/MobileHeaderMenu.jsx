import { Link, useNavigate } from "react-router-dom";
import { navConfig } from "../../../../config";

import "./MobileHeaderMenu.scss";

const MobileHeaderMenu = ({ mobileOpen }) => {
  const navigate = useNavigate();

  return (
    <div
      className="mobile-menu"
      style={mobileOpen ? { transform: "translateX(-100%)" } : {}}
    >
      <ul>
        {navConfig &&
          navConfig.map(({ id, title, link, children }) => {
            return (
              <li
                key={id}
                onClick={() => {
                  navigate(link);
                }}
              >
                <Link to={link}>{title}</Link>
                {children &&
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
