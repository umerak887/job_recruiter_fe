import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebarReducer",
  initialState: {
    expanded: false,
  },
  reducers: {
    setExpanded: (state) => {
      state.expanded = !state.expanded;
    },
    collapseSidebar: (state) => {
      state.expanded = false;
    },
  },
});
export const { setExpanded, collapseSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
