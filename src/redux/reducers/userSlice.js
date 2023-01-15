import { createSlice } from "@reduxjs/toolkit";
import { userStates } from "../userState";

export const userSlice = createSlice({
  name: "userStates",
  initialState: userStates,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
