import { createSlice } from "@reduxjs/toolkit";

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

const initialState = {
  homeImages: [
    {
      id: 1,
      description: "",
      src: g1,
    },
    {
      id: 2,
      description: "",
      src: g2,
    },
    {
      id: 3,
      description: "",
      src: g3,
    },
    {
      id: 4,
      description: "",
      src: g4,
    },
    {
      id: 5,
      description: "",
      src: g5,
    },
    {
      id: 6,
      description: "",
      src: g6,
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
  ],
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
});

export const {} = imagesSlice.actions;
export default imagesSlice.reducer;
