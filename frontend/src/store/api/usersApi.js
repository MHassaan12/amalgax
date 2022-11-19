import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: 'usersApi',
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5500/api/' }),
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}api`,
    // baseUrl: 'https://singularplayers.com/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUserTeam: builder.query({
      query: (id) => `/user_team/${id}`
    }),
    getHistroy: builder.query({
      query: () => "/history"
    })
  }),
})

export const { useGetUserTeamQuery, useGetHistroyQuery } = usersApi
