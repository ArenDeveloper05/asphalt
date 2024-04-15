import { useEffect } from "react";

import CreatingRoads from "../components/services/creating-roads/CreatingRoads";
import Layout from "../layout/Layout";
import PageBanner from "../components/common/page-banner/PageBanner";

const CreatingRoadsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <PageBanner
        list={[
          { id: 1, title: "Услуги", link: "" },
          { id: 2, title: "Строительство дорог", link: "" },
        ]}
      />
      <CreatingRoads />
    </Layout>
  );
};

export default CreatingRoadsPage;
