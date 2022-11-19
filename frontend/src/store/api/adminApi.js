import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: 'adminApi',
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
    getAllUsers: builder.query({
      query: () => '/users'
    }),
    getDepositUsers: builder.query({
      query: () => "/deposit_users"
    }),
    getRefundUsers: builder.query({
      query: (id) => "/refund_users"
    }),
    depositAction: builder.mutation({
      query: (body) => {
        return {
          url: '/deposit_action',
          method: 'post',
          body
        }
      }
    }),
    refundAction: builder.mutation({
      query: (body) => {
        return {
          url: '/refund_action',
          method: 'post',
          body
        }
      }
    }),
  }),
})

export const { useGetAllUsersQuery, useGetDepositUsersQuery, useGetRefundUsersQuery, useDepositActionMutation, useRefundActionMutation } = adminApi;
