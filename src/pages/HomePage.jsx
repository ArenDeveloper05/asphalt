import { useEffect } from "react";

import PageBanner from "../components/common/page-banner/PageBanner";
import Home from "../components/home/Home";
import Layout from "../layout/Layout";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      <PageBanner list={[{ id: 1, title: "Главная", link: "" }]} />
      <Home />
    </Layout>
  );
};

export default HomePage;
