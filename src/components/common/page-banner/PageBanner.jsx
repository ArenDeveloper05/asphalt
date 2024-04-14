import { Link } from "react-router-dom";
import { ROUTER } from "../../../router/router";
import { Fragment } from "react";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

import bannerImg from "../../../assets/images/banner/page-banner.png";

import "./PageBanner.scss";

const PageBanner = ({ img, list }) => {
  return (
    <div
      className="page-banner"
      style={
        img
          ? { backgroundImage: `url(${img})` }
          : { backgroundImage: `url(${bannerImg})` }
      }
    >
      <FaHome />
      <Link to={ROUTER.HOME_PAGE_ROUTE}> Начало</Link>
      {list &&
        list.map(({ id, title, link }) => {
          return (
            <Fragment key={id}>
              <MdKeyboardArrowRight />
              {link ? <Link to={link}>{title}</Link> : <p>{title}</p>}
            </Fragment>
          );
        })}
    </div>
  );
};

export default PageBanner;
