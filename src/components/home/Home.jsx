import HomeContact from "./home-contact/HomeContact";
import HomeGallery from "./home-gallery/HomeGallery";
import HomeInfo from "./home-info/HomeInfo";
import HomeServices from "./home-services/HomeServices";

const Home = () => {
  return (
    <div className="home">
      <HomeInfo />
      <HomeServices />
      <HomeGallery />
      <HomeContact />
    </div>
  );
};

export default Home;
