import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./reducers/testSlice";
import userReducer from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
    user: userReducer,
  },
});
