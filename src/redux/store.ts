import { configureStore } from '@reduxjs/toolkit'
import archetypesReducers from './features/archetypes.slice'
import { archetypesApi } from './services/archetypesApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import userReducers from './features/user.slice'

export const store = configureStore({
  reducer: {
    userReducers,
    archetypesReducers,
    [archetypesApi.reducerPath]: archetypesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([archetypesApi.middleware])
})

setupListeners(store.dispatch)

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
