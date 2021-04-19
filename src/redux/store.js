import { configureStore } from "@reduxjs/toolkit";
import toggleA from "./slices/toggleA";
import toggleB from "./slices/toggleB";

export default configureStore({
  reducer: {
    toggleA,
    toggleB,
  },
});
