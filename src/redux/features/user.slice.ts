import { createSlice } from '@reduxjs/toolkit'
import { IUserState } from '../models/user.model'

const initialState: IUserState = {
  name: null,
  email: null,
  password: null,
  token: null,
  complementary: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser: (state) => {
      return state
    }
  }
})

export const { fetchUser } = userSlice.actions
export default userSlice.reducer
