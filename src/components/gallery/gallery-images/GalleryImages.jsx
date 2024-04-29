import { useSelector } from "react-redux";

import "./GalleryImages.scss";

import ImageGallery from "react-image-gallery";
import BaseTitle from "../../common/base-title/BaseTitle";

const GalleryImages = () => {
  const images = useSelector((state) => state.images.allImages);

  const props = {
    title:
      "Фото дорожных работ по асфальтированию, ремонту дорог и укладке асфальтовой крошки в Сергиевом Посаде, Пушкино и соседних районах",
    description: "",
  };

  return (
    <div className="gallery-images">
      <BaseTitle title={props.title} />

      <div className="gallery-images-list">
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default GalleryImages;
