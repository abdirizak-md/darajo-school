import { apiSlice } from "../api/apiSlice";

export const sectionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSections: builder.query({
      query: () => "/sections",
      providesTags: ["Section"],
    }),
  }),
});

export const {
  useGetSectionsQuery,
} = sectionApi;