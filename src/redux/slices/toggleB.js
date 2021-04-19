import { createSlice } from "@reduxjs/toolkit";

export const toggleB = createSlice({
  name: "toggleB",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = toggleB.actions;
export default toggleB.reducer;
