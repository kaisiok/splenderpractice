import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./reducers/testSlice";
import userReducer from "./reducers/userSlice";
import tokenReducer from "./reducers/tokenSlice";
import cardReducer from "./reducers/cardSlice";
import tileReducer from "./reducers/tileSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
    user: userReducer,
    token: tokenReducer,
    card: cardReducer,
    tile: tileReducer,
  },
});
