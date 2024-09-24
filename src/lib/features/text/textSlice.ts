import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFact } from '@/lib/model'

export const uselessApi = createApi({
  reducerPath: 'uselessApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://uselessfacts.jsph.pl/api/v2/' }),
  endpoints: (builder) => ({
    getRandomFact: builder.query<IFact, void>({
      query: () => `facts/random`,
    }),
  }),
})

export const { useGetRandomFactQuery } = uselessApi