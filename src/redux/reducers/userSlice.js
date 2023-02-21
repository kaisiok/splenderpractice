import { createSlice } from "@reduxjs/toolkit";
import { userStates } from "../userState";

export const userSlice = createSlice({
  name: "userStates",
  initialState: userStates,
  reducers: {
    getTokenUser: (state, payload) => {
      for (let key in state[payload.payload.id - 1].tokens) {
        if (payload.payload.tokens[key]) {
          state[payload.payload.id - 1].tokens[key] +=
            payload.payload.tokens[key];
        }
      }
    },
  },
});

export const { getTokenUser } = userSlice.actions;

export default userSlice.reducer;
