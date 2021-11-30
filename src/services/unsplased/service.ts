import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { UnsplashImageDTO } from './types'

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com/',
    prepareHeaders: (headers) => {
      headers.set(
        'authorization',
        'Client-ID kNmCjscs08xEPKJf_IR11k9UTdCqHU7-40iswxxgdLQ'
      )

      return headers
    },
  }),
  endpoints: (builder) => ({
    getPhotos: builder.query<UnsplashImageDTO[], string>({
      query: () => `/photos?per_page=50`,
    }),
    getPhoto: builder.query<UnsplashImageDTO, string>({
      query: (id) => `/photos/${id}`,
    }),
  }),
})

export const { useGetPhotosQuery, useGetPhotoQuery } = unsplashApi
