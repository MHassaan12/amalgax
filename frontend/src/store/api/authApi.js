import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
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
    credentials: "include"
  }),

  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => {
        return {
          url: '/register',
          method: 'post',
          body
        }
      }
    }),
    signin: builder.mutation({
      query: (body) => {
        return {
          url: '/login',
          method: 'post',
          body
        }
      }
    }),
    verifyEmail: builder.mutation({
      query: (body) => {
        return {
          url: '/verify-link',
          method: 'post',
          body
        }
      }
    }),
    emailVerify: builder.mutation({
      query: (body) => {
        return {
          url: '/email-verify',
          method: 'post',
          body
        }
      }
    }),
    forgotPassword: builder.mutation({
      query: (body) => {
        return {
          url: '/forgot-password',
          method: 'post',
          body
        }
      }
    }),
    profileUpdate: builder.mutation({
      query: (body) => {
        return {
          url: 'profile',
          method: 'post',
          body
        }
      }
    }),
    payout: builder.mutation({
      query: (body) => {
        console.log( body);
        return {
          url: '/payout',
          method: 'post',
          body
        }
      }
    }),
    getProfile: builder.query({
      query: () => "/me"
    }),
    token: builder.mutation({
      query: (body) => {
        console.log(body);
        return {
          url: '/refresh',
          method: 'post',
          body
        }
      }
    }),
  }),
})

export const { useSigninMutation, useSignupMutation, useVerifyEmailMutation, useEmailVerifyMutation, useForgotPasswordMutation, useProfileUpdateMutation, usePayoutMutation, useGetProfileQuery, useGetTokenQuery, useTokenMutation } = authApi
