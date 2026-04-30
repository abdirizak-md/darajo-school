import { apiSlice } from "../api/apiSlice";


export const parentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getParents: builder.query({ 
        query: () => "/parents",
        providesTags: ["Parents"],
    }),
    createParent: builder.mutation({
        query: (data) => ({
            url: "/parents",
            method: "POST",
            body: data,
        }),
        invalidatesTags: ["Parents"],
    }),
  }),
});

export const { useGetParentsQuery, useCreateParentMutation } = parentApi;