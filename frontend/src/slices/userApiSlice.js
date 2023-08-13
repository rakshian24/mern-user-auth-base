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
    })
  }),
});

export const {
  useSignInMutation,
} = userApiSlice;