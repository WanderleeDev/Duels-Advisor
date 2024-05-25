import { createSlice } from "@reduxjs/toolkit";
import { ICardDbState } from "../models/cardDB.model";


const initialState: ICardDbState = {
  cards: [],
  num: 20,
  offset:0
} 

const cardDbSlice = createSlice({
  name: 'cardDb',
  initialState,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload
    },
    setNum(state, action) {
      state.num = action.payload
    },
    setOffset(state, action) {
      state.offset = action.payload
    }
  }
})