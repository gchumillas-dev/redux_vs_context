import { createSlice } from "@reduxjs/toolkit";

export const toggleA = createSlice({
  name: "toggleA",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = toggleA.actions;
export default toggleA.reducer;
