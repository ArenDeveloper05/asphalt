import { createSlice } from "@reduxjs/toolkit";

import img1 from "../../assets/images/home/gallery/img1.jpg";
import img2 from "../../assets/images/home/gallery/img2.jpg";
import img3 from "../../assets/images/home/gallery/img3.jpg";
import img4 from "../../assets/images/home/gallery/img4.jpg";

import g1 from "../../assets/images/home/gallery/g1.jpg";
import g2 from "../../assets/images/home/gallery/g2.jpg";
import g3 from "../../assets/images/home/gallery/g3.jpg";
import g4 from "../../assets/images/home/gallery/g4.jpg";
import g5 from "../../assets/images/home/gallery/g5.jpg";
import g6 from "../../assets/images/home/gallery/g6.jpg";
import g7 from "../../assets/images/home/gallery/g7.jpg";
import g8 from "../../assets/images/home/gallery/g8.jpg";
import g9 from "../../assets/images/home/gallery/g9.jpg";
import g10 from "../../assets/images/home/gallery/g10.jpg";
import g11 from "../../assets/images/home/gallery/g11.jpg";
import g12 from "../../assets/images/home/gallery/g12.jpg";
import g13 from "../../assets/images/home/gallery/g13.jpg";
import g14 from "../../assets/images/home/gallery/g14.jpg";
import g15 from "../../assets/images/home/gallery/g15.jpg";
import g16 from "../../assets/images/home/gallery/g16.jpg";
import g17 from "../../assets/images/home/gallery/g17.jpg";
import g18 from "../../assets/images/home/gallery/g18.jpg";
import g19 from "../../assets/images/home/gallery/g19.jpg";
import g20 from "../../assets/images/home/gallery/g20.jpg";
import g21 from "../../assets/images/home/gallery/g21.jpg";
import g22 from "../../assets/images/home/gallery/g22.jpg";
import g23 from "../../assets/images/home/gallery/g23.jpg";
import g24 from "../../assets/images/home/gallery/g24.jpg";
import g25 from "../../assets/images/home/gallery/g25.jpg";
import g26 from "../../assets/images/home/gallery/g26.jpg";
import g27 from "../../assets/images/home/gallery/g27.jpg";
import g28 from "../../assets/images/home/gallery/g28.jpg";
import g29 from "../../assets/images/home/gallery/g29.jpg";
import g30 from "../../assets/images/home/gallery/g30.jpg";
import g31 from "../../assets/images/home/gallery/g31.jpg";
import g32 from "../../assets/images/home/gallery/g32.jpg";
import g33 from "../../assets/images/home/gallery/g33.jpg";
import g34 from "../../assets/images/home/gallery/g34.jpg";
import g35 from "../../assets/images/home/gallery/g35.jpg";
import g36 from "../../assets/images/home/gallery/g36.jpg";
import g37 from "../../assets/images/home/gallery/g37.jpg";
import g38 from "../../assets/images/home/gallery/g38.jpg";
import g39 from "../../assets/images/home/gallery/g39.jpg";

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
  allImages: [
    {
      original: g1,
      thumbnail: g1,
    },
    {
      original: g2,
      thumbnail: g2,
    },
    {
      original: g3,
      thumbnail: g3,
    },
    {
      original: g4,
      thumbnail: g4,
    },
    {
      original: g5,
      thumbnail: g5,
    },
    {
      original: g6,
      thumbnail: g6,
    },
    {
      original: g7,
      thumbnail: g7,
    },
    {
      original: g8,
      thumbnail: g8,
    },
    {
      original: g9,
      thumbnail: g9,
    },
    {
      original: g10,
      thumbnail: g10,
    },
    {
      original: g11,
      thumbnail: g11,
    },
    {
      original: g12,
      thumbnail: g12,
    },
    {
      original: g13,
      thumbnail: g13,
    },
    {
      original: g14,
      thumbnail: g14,
    },
    {
      original: g15,
      thumbnail: g15,
    },
    {
      original: g16,
      thumbnail: g16,
    },
    {
      original: g17,
      thumbnail: g17,
    },
    {
      original: g18,
      thumbnail: g18,
    },
    {
      original: g19,
      thumbnail: g19,
    },
    {
      original: g20,
      thumbnail: g20,
    },
    {
      original: g21,
      thumbnail: g21,
    },
    {
      original: g22,
      thumbnail: g22,
    },
    {
      original: g23,
      thumbnail: g23,
    },
    {
      original: g24,
      thumbnail: g24,
    },
    {
      original: g25,
      thumbnail: g25,
    },
    {
      original: g26,
      thumbnail: g26,
    },
    {
      original: g27,
      thumbnail: g27,
    },
    {
      original: g28,
      thumbnail: g28,
    },
    {
      original: g29,
      thumbnail: g29,
    },
    {
      original: g30,
      thumbnail: g30,
    },
    {
      original: g31,
      thumbnail: g31,
    },
    {
      original: g32,
      thumbnail: g32,
    },
    {
      original: g33,
      thumbnail: g33,
    },
    {
      original: g34,
      thumbnail: g34,
    },
    {
      original: g35,
      thumbnail: g35,
    },
    {
      original: g36,
      thumbnail: g36,
    },
    {
      original: g37,
      thumbnail: g37,
    },
    {
      original: g38,
      thumbnail: g38,
    },
    {
      original: g39,
      thumbnail: g39,
    },
  ],
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
});

export const {} = imagesSlice.actions;
export default imagesSlice.reducer;
