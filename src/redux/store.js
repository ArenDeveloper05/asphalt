import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./slices/imagesSlice";

const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

export default store;
