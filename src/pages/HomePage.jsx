import PageBanner from "../components/common/page-banner/PageBanner";
import Home from "../components/home/Home";
import Layout from "../layout/Layout";

import bannerImg from "../assets/images/banner/page-banner.png";

const HomePage = () => {
  return (
    <Layout>
      <PageBanner
        img={bannerImg}
        list={[{ id: 1, title: "Главная", link: "" }]}
      />
      <Home />
    </Layout>
  );
};

export default HomePage;
