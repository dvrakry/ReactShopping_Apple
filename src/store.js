import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

export let { changeName } = user.actions;
export let { changeAge } = user.actions;

let 재고 = createSlice({
  name: "재고",
  initialState: [10, 11, 12],
});

let 데이터 = createSlice({
  name: "데이터",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    재고: 재고.reducer,
    데이터: 데이터.reducer,
  },
});
