import { useEffect } from "react";
import { ROUTER } from "../router/router";

import PageBanner from "../components/common/page-banner/PageBanner";
import AsphaltingRoads from "../components/services/asphalting-roads/AsphaltingRoads";
import Layout from "../layout/Layout";

const AsphaltingRoadsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <PageBanner
        list={[
          { id: 1, title: "Услуги", link: ROUTER.SERVICES_PAGE_ROUTE },
          { id: 2, title: "Асфальтирование дорог", link: "" },
        ]}
      />
      <AsphaltingRoads />;
    </Layout>
  );
};

export default AsphaltingRoadsPage;
