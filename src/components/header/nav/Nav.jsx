import { Link } from "react-router-dom";
import { navConfig } from "../../../config";
import { ROUTER } from "../../../router/router";

import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <h1>
        Дор <span>-</span> Строй <span>-</span>Асфальт
      </h1>
      <nav className="nav">
        {navConfig &&
          navConfig.map(({ id, title, link, children }) => {
            return (
              <div className="nav-item" key={id}>
                <Link to={link ? link : ROUTER.HOME_PAGE_ROUTE}>
                  {title && title}
                </Link>
                {children.length !== 0 && (
                  <div className="nav-item-nested">
                    {children.map(({ id, title, link }) => {
                      return (
                        <div className="nav-item-nested-item" key={id}>
                          <Link to={link ? link : ROUTER.HOME_PAGE_ROUTE}>
                            {title && title}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
      </nav>
    </div>
  );
};

export default Nav;
