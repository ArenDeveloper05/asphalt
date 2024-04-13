import { createSlice } from "@reduxjs/toolkit";

import img1 from "../../assets/images/home/gallery/img1.jpg";
import img2 from "../../assets/images/home/gallery/img2.jpg";
import img3 from "../../assets/images/home/gallery/img3.jpg";
import img4 from "../../assets/images/home/gallery/img4.jpg";

const initialState = {
  homeImages: [
    {
      id: 1,
      description: "Асфальтирование в складском комплексе Сергиев Посад",
      src: img1,
    },
    {
      id: 2,
      description: "Укладка асфальта в Мытищах, подъезд к промзоне",
      src: img2,
    },
    {
      id: 3,
      description: "Дорога в дачный кооператив в Пушкино",
      src: img3,
    },
    {
      id: 4,
      description: "Асфальтирование площадки в Сергиевом Посаде",
      src: img4,
    },
  ],
  allImages: [],
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
});

export const {} = imagesSlice.actions;
export default imagesSlice.reducer;
