import { useEffect } from "react";
import { ROUTER } from "../router/router";

import PageBanner from "../components/common/page-banner/PageBanner";
import AsphaltCrumbs from "../components/services/asphalt-crumbs/AsphaltCrumbs";
import Layout from "../layout/Layout";

const AsphaltCrumbsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <PageBanner
        list={[
          { id: 1, title: "Услуги", link: ROUTER.SERVICES_PAGE_ROUTE },
          { id: 2, title: "Асфальтовая крошка", link: "" },
        ]}
      />
      <AsphaltCrumbs />
    </Layout>
  );
};

export default AsphaltCrumbsPage;
