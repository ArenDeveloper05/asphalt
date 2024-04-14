import { useEffect } from "react";

import PageBanner from "../components/common/page-banner/PageBanner";
import Gallery from "../components/gallery/Gallery";
import Layout from "../layout/Layout";

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      <PageBanner list={[{ id: 1, title: "Галерея", link: "" }]} />
      <Gallery />
    </Layout>
  );
};

export default GalleryPage;
