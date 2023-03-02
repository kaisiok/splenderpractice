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
    buyCardUser: (state, payload) => {
      const userIdx = Number(payload.payload.user.id.slice(-1)) - 1;
      const type = payload.payload.selectedCard.type + "Cards";
      let goldTokenNeeds = 0;
      for (let a in payload.payload.selectedCard.cost) {
        let typeDiscount = a.slice(0, -5) + "Cards";
        let discount = payload.payload.user.cards[typeDiscount].length;
        let cardCost = payload.payload.selectedCard.cost[a];
        let userTokens = payload.payload.user.tokens[a];
        if (cardCost > 0) {
          if (userTokens + discount - cardCost >= 0) {
            if (discount - cardCost < 0) {
              state[userIdx].tokens[a] += discount - cardCost;
            }
          } else {
            state[userIdx].tokens[a] = 0;
            goldTokenNeeds += userTokens + discount - cardCost;
          }
        }
      }
      state[userIdx].tokens.goldToken += goldTokenNeeds;
      state[userIdx].cards[type].push(payload.payload.selectedCard);
      state[userIdx].score += payload.payload.selectedCard.score;
    },
    bringCardUser: (state, payload) => {
      if (payload.payload.remainGoldToken > 0) {
        state[payload.payload.user].tokens.goldToken += 1;
      }
      state[payload.payload.user].hands.push(payload.payload.selectedCard);
    },
    getTileUser: (state, payload) => {
      const activatedPlayer = payload.payload.activatedPlayer;
      state[activatedPlayer - 1].score += 3;
      state[activatedPlayer - 1].tiles.push(payload.payload.tile);
    },
  },
});

export const { getTokenUser, buyCardUser, bringCardUser, getTileUser } =
  userSlice.actions;

export default userSlice.reducer;
