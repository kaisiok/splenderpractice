import { createSlice } from "@reduxjs/toolkit";

const turnState = {
  activatedPlayer: 1,
  canPlay: true,
  gameEnd: false,
  action: "",
  tokens: {
    emeraldToken: 0,
    diamondToken: 0,
    sapphireToken: 0,
    onyxToken: 0,
    rubyToken: 0,
  },
  buyCard: {
    id: "",
    cost: {
      emeraldToken: 0,
      diamondToken: 0,
      sapphireToken: 0,
      onyxToken: 0,
      rubyToken: 0,
    },
  },
  bringCard: {
    id: "",
    goldToken: 0,
  },
  getTile: {
    status: false,
    tileInfo: {},
  },
};

export const turnSlice = createSlice({
  name: "turn",
  initialState: turnState,
  reducers: {
    nextTurn: (state) => {
      if (state.activatedPlayer < 4) {
        state.activatedPlayer += 1;
      } else {
        state.activatedPlayer = 1;
      }
      state.canPlay = true;
      state.action = "";
      state.tokens = {
        emeraldToken: 0,
        diamondToken: 0,
        sapphireToken: 0,
        onyxToken: 0,
        rubyToken: 0,
      };
      state.buyCard.id = "";
      state.buyCard.cost = {
        emeraldToken: 0,
        diamondToken: 0,
        sapphireToken: 0,
        onyxToken: 0,
        rubyToken: 0,
      };
      state.bringCard.id = "";
      state.bringCard.goldToken = 0;
      state.getTile.status = false;
      state.getTile.tileInfo = {};
    },
    getTokenInTurn: (state, payload) => {
      state.canPlay = false;
      state.action = "tokens";
      Object.assign(state.tokens, payload.payload);
    },
    buyCardInTurn: (state, payload) => {
      state.canPlay = false;
      state.action = "buyCard";
      state.buyCard.id = payload.payload.selectedCard.id;
      Object.assign(state.buyCard.cost, payload.payload.selectedCard.cost);
    },
    bringCardInTurn: (state, payload) => {
      state.canPlay = false;
      state.action = "bringCard";
      state.bringCard.id = payload.payload.selectedCard.id;
      if (payload.payload.remainGoldToken > 0) {
        state.bringCard.goldToken = 1;
      }
    },
    getTileInTurn: (state, payload) => {
      state.getTile.status = true;
      state.getTile.tileInfo = payload.payload.tile;
    },
    notGetTileInTurn: (state) => {
      state.getTile.status = false;
    },
    undoTurn: (state) => {
      state.canPlay = true;
      state.action = "";
      state.tokens = {
        emeraldToken: 0,
        diamondToken: 0,
        sapphireToken: 0,
        onyxToken: 0,
        rubyToken: 0,
      };
      state.buyCard.id = "";
      state.buyCard.cost = {
        emeraldToken: 0,
        diamondToken: 0,
        sapphireToken: 0,
        onyxToken: 0,
        rubyToken: 0,
      };
      state.bringCard.id = "";
      state.bringCard.goldToken = 0;
      state.getTile.status = false;
      state.getTile.tileInfo = {};
    },
    gameEndTurn: (state) => {
      state.gameEnd = true;
    },
  },
});

export const {
  nextTurn,
  getTokenInTurn,
  buyCardInTurn,
  bringCardInTurn,
  getTileInTurn,
  notGetTileInTurn,
  undoTurn,
  gameEndTurn,
} = turnSlice.actions;

export default turnSlice.reducer;
