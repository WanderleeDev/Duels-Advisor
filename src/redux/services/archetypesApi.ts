import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { archetype } from '../models/archetype.model'

export const archetypesApi = createApi({
  reducerPath: 'archetypeAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_YUGIOH_API
  }),
  endpoints: (builder) => ({
    getArchetypes: builder.query<archetype[], null>({
      query: () => '/archetypes.php'
    })
  })
})

export const { useGetArchetypesQuery } = archetypesApi
