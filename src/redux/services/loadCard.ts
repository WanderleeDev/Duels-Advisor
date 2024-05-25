// https://db.ygoprodeck.com/ap{i/v7/cardinfo.php?num=1&offset=0
import { IResCardData } from '../models/cardDB.model'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardApi = createApi({
  reducerPath: 'carAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_YUGIOH_API,
  }),
  endpoints: (builder) => {
    // const params = new URLSearchParams({
    //   num: '1',
    //   offset: '0',
    // })
    return {
      getCards: builder.query<IResCardData, null>({
        query: () => `/cardinfo.php?/cardinfo.php?num=1&offset=0`,
      }),
    }
  }
})
