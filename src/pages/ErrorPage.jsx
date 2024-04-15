import { useEffect } from "react";

import Error from "../components/error/Error";

const ErrorPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return <Error />;
};

export default ErrorPage;
