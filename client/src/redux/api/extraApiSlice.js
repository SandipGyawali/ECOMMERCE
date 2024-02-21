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
    recommendedItems: builder.query({
      query: () => ({
        url: "/api/recommendedItems",
        method: "GET",
      }),
    }),

    dealAndOffers: builder.query({
      query: () => ({
        url: "/api/dealAndOffers",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSubscribeMutation,
  useRecommendedItemsQuery,
  useDealAndOffersQuery,
} = extraApiSlice;
