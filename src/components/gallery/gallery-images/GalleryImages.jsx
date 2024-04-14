import { useSelector } from "react-redux";
import "./GalleryImages.scss";

import ImageGallery from "react-image-gallery";

const GalleryImages = () => {
  const images = useSelector((state) => state.images.allImages);
  console.log(images);

  return (
    <div className="gallery-images">
      <h1>
        Фото дорожных работ по асфальтированию, ремонту дорог и укладке
        асфальтовой крошки в Сергиевом Посаде, Пушкино и соседних районах
      </h1>

      <div className="gallery-images-list">
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default GalleryImages;
