import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./reducers/testSlice"; //추후 삭제하기
import userReducer from "./reducers/userSlice";
import tokenReducer from "./reducers/tokenSlice";
import cardReducer from "./reducers/cardSlice";
import tileReducer from "./reducers/tileSlice";
import turnReducer from "./reducers/turnSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
    card: cardReducer,
    tile: tileReducer,
    turn: turnReducer,
  },
});
