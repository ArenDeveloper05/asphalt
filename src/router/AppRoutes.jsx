import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";

import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import GalleryPage from "../pages/GalleryPage";
import ContactPage from "../pages/ContactPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={ROUTER.ERROR_PAGE_ROUTE} element={<ErrorPage />} />
      <Route path={ROUTER.GALLERY_PAGE_ROUTE} element={<GalleryPage />} />
      <Route path={ROUTER.CONTACT_PAGE_ROUTE} element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
