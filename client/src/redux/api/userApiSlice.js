import { apiSlice } from ".";

const USERS_URL = "/auth/users";

export const userAuthApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // login logic
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signin`,
        method: "POST",
        body: data,
      }),
    }),

    // signup logic
    signUp: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signup`,
        method: "POST",
        body: data,
      }),
    }),

    // token is valid
    isValidToken: builder.query({
      query: () => ({
        url: `${USERS_URL}/isValid`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useIsValidTokenQuery } =
  userAuthApiSlice;
