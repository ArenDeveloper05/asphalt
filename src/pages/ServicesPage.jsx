import { useEffect } from "react";

import Layout from "../layout/Layout";
import PageBanner from "../components/common/page-banner/PageBanner";
import Services from "../components/services/Services";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <PageBanner list={[{ id: 1, title: "Услуги", link: "" }]} />
      <Services />
    </Layout>
  );
};

export default ServicesPage;
