import { createSlice } from "@reduxjs/toolkit";
import { cardState } from "../cardState";

export const cardSlice = createSlice({
  name: "cardStates",
  initialState: cardState,
  reducers: {
    shuffleCard: (obj) => {
      for (let key in obj.cardOnDeck) {
        if (Array.isArray(obj.cardOnDeck[key])) {
          for (let i = obj.cardOnDeck[key].length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [obj.cardOnDeck[key][i], obj.cardOnDeck[key][j]] = [
              obj.cardOnDeck[key][j],
              obj.cardOnDeck[key][i],
            ];
          }
        }
      }
    },
    openNewCard: (obj, action) => {
      if (
        obj.cardOnDeck[action.payload].length > 0 &&
        obj.cardOnBoard[action.payload].length < 4
      ) {
        const newCard = obj.cardOnDeck[action.payload].pop();
        obj.cardOnBoard[action.payload].push(newCard);
      }
    },
    buyCard: (obj, payload) => {
      const cardId = payload.payload.slice(0, -1);
      const cardTier = "tier" + cardId[0];
      const cardIdx = payload.payload.slice(-1);

      let newCard = obj.cardOnDeck[cardTier].pop();
      obj.cardOnBoard[cardTier][cardIdx] = newCard;
    },
    bringCard: (obj, payload) => {
      const cardId = payload.payload.slice(0, -1);
      const cardTier = "tier" + cardId[0];
      const cardIdx = payload.payload.slice(-1);

      let newCard = obj.cardOnDeck[cardTier].pop();
      obj.cardOnBoard[cardTier][cardIdx] = newCard;
    },
    bringDeck: (obj, payload) => {
      obj.cardOnDeck[payload.payload].pop();
    },
  },
});

export const { shuffleCard, openNewCard, buyCard, bringCard, bringDeck } =
  cardSlice.actions;

export default cardSlice.reducer;
