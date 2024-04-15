import { useEffect } from "react";

import PageBanner from "../components/common/page-banner/PageBanner";
import Layout from "../layout/Layout";
import Contact from "../components/contact/Contact";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, beshavior: "smooth" });
  }, []);

  return (
    <Layout>
      <PageBanner list={[{ id: 1, title: "Контакты", link: "" }]} />
      <Contact />
    </Layout>
  );
};

export default ContactPage;
