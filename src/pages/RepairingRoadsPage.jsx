import { useEffect } from "react";
import { ROUTER } from "../router/router";

import PageBanner from "../components/common/page-banner/PageBanner";
import RepairingRoads from "../components/services/repairing-roads/RepairingRoads";
import Layout from "../layout/Layout";

const RepairingRoadsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <PageBanner
        list={[
          { id: 1, title: "Услуги", link: ROUTER.SERVICES_PAGE_ROUTE },
          { id: 2, title: "Ремонт дорог", link: "" },
        ]}
      />
      <RepairingRoads />
    </Layout>
  );
};

export default RepairingRoadsPage;
