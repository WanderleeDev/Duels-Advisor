import { createSlice } from '@reduxjs/toolkit'
import { ICardState } from '../models/card.model'

const initialState: ICardState = {
  myCards: []
}

const cardSlice = createSlice({
  name: 'myCards',
  initialState,
  reducers: {
    fetchCards: (state) => {
      return state
    }
  }
})

export const { fetchCards } = cardSlice.actions
export default cardSlice.reducer
