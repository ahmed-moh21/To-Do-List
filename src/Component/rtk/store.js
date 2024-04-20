import { configureStore } from "@reduxjs/toolkit";
import ListFormSlice from "./ListFormSlice";

export const store = configureStore({
  reducer: {
    listslice: ListFormSlice,
  },
});
