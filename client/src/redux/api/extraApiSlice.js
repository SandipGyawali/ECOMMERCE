import { apiSlice } from ".";

// this api is for the email subscribe for the regular email update
export const extraApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // sent logic
    subscribe: builder.mutation({
      query: (data) => ({
        url: `/api/subscribe`,
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
  }),
});

export const { useSubscribeMutation } = extraApiSlice;
