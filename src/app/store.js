import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../modules/Auth/store.js";
import sidebarReducer from "../components/SideBar/store.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebarReducer,
  },
});

export default store;
