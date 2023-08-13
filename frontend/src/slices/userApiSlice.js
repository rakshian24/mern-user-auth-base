import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signIn`,
        method: 'POST',
        body: data,
      }),
    }),
    signOut: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/signOut`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignOutMutation,
} = userApiSlice;