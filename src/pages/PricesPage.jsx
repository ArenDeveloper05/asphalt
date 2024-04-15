import { useEffect } from "react";

import PageBanner from "../components/common/page-banner/PageBanner";
import Prices from "../components/prices/Prices";
import Layout from "../layout/Layout";

const PricesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <PageBanner list={[{ id: 1, title: "Цены", link: "" }]} />
      <Prices />
    </Layout>
  );
};

export default PricesPage;
