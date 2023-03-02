import { createSlice } from "@reduxjs/toolkit";
import { tokenState } from "../tokenState";

export const tokenSlice = createSlice({
  name: "tokenStates",
  initialState: tokenState,
  reducers: {
    getToken: (state, payload) => {
      Object.assign(state, payload.payload);
    },
    cancelGetToken: (state, payload) => {
      for (let key in state) {
        if (payload.payload[key]) {
          state[key] += payload.payload[key];
        }
      }
    },
    getGoldToken: (state) => {
      state.goldToken -= 1;
    },
    buyCardToken: (state, payload) => {
      let goldTokenNeeds = 0;
      for (let a in payload.payload.selectedCard.cost) {
        let typeDiscount = a.slice(0, -5) + "Cards";
        let discount = payload.payload.user.cards[typeDiscount].length;
        let cardCost = payload.payload.selectedCard.cost[a];
        let userTokens = payload.payload.user.tokens[a];
        if (cardCost > 0) {
          if (userTokens + discount - cardCost >= 0) {
            if (discount - cardCost < 0) {
              state[a] += cardCost - discount;
            }
          } else {
            state[a] += userTokens;
            goldTokenNeeds += userTokens + discount - cardCost;
          }
        }
      }
      state.goldToken -= goldTokenNeeds;
    },
  },
});

export const { getToken, cancelGetToken, getGoldToken, buyCardToken } =
  tokenSlice.actions;

export default tokenSlice.reducer;
