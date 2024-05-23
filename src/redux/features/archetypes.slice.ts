import { createSlice } from '@reduxjs/toolkit'
import { archetypeState } from '../models/archetype.model'

const initialState: archetypeState = {
  archetypes: []
}

const archetypesSlice = createSlice({
  name: 'archetypes',
  initialState,
  reducers: {
    fetchArchetypes: (state) => {
      return state
    }
  }
})

export const { fetchArchetypes } = archetypesSlice.actions

export default archetypesSlice.reducer
