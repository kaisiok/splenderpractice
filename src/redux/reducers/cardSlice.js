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
  },
});

export const { shuffleCard, openNewCard } = cardSlice.actions;

export default cardSlice.reducer;
