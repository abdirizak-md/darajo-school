import { apiSlice } from "../api/apiSlice";

export const classApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createClass: builder.mutation({
      query: (data) => ({
        url: "/classes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Class"],
    }),

    getClasses: builder.query({
      query: () => "/classes",
      providesTags: ["Class"],
    }),
  }),
});

export const {
  useCreateClassMutation,
  useGetClassesQuery,
} = classApi;