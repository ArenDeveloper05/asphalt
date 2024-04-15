import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";

import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import GalleryPage from "../pages/GalleryPage";
import ContactPage from "../pages/ContactPage";
import CreatingRoadsPage from "../pages/CreatingRoadsPage";
import AsphaltingRoadsPage from "../pages/AsphaltingRoadsPage";
import RepairingRoadsPage from "../pages/RepairingRoadsPage";
import AsphaltCrumbsPage from "../pages/AsphaltCrumbsPage";
import PricesPage from "../pages/PricesPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={ROUTER.ERROR_PAGE_ROUTE} element={<ErrorPage />} />
      <Route path={ROUTER.GALLERY_PAGE_ROUTE} element={<GalleryPage />} />
      <Route path={ROUTER.CONTACT_PAGE_ROUTE} element={<ContactPage />} />
      <Route
        path={ROUTER.CREATING_ROADS_PAGE_ROUTE}
        element={<CreatingRoadsPage />}
      />
      <Route
        path={ROUTER.ASPHALTING_ROADS_PAGE_ROUTE}
        element={<AsphaltingRoadsPage />}
      />
      <Route
        path={ROUTER.REPAIRING_ROADS_PAGE_ROUTE}
        element={<RepairingRoadsPage />}
      />
      <Route
        path={ROUTER.ASPHALT_CRUMBS_PAGE_ROUTE}
        element={<AsphaltCrumbsPage />}
      />
      <Route path={ROUTER.PRICES_PAGE_ROUTE} element={<PricesPage />} />
    </Routes>
  );
};

export default AppRoutes;
