import { createSlice } from "@reduxjs/toolkit";

export const ListFormSlice = createSlice({
  name: "ListFormSlice",
  initialState: [],
  reducers: {
    additem: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { additem } = ListFormSlice.actions;

export default ListFormSlice.reducer;
