import { createSlice } from "@reduxjs/toolkit";

// Function to fetch user data from localStorage
const fetchUserData = () => {
  const storedData = localStorage.getItem("userData");
  return storedData ? JSON.parse(storedData) : null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: localStorage.getItem("token") ? true : false,
    userData: fetchUserData() || {
      name: "",
      email: "",
      id: "",
      role: "",
    },
  },
  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.isLogin = localStorage.getItem("token") ? true : false;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.isLogin = false;
    },
    storeUserData: (state, action) => {
      const userData = action.payload.data;
      localStorage.setItem("userData", JSON.stringify(userData));
      state.userData = userData;
    },
  },
});

export const { login, logout, storeUserData } = authSlice.actions;
export default authSlice.reducer;
