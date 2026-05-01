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
    updateParent: builder.mutation({
        query: ({ id, ...data }) => ({
            url: `/parents/${id}`,
            method: "PUT",
            body: data,
        }),
        invalidatesTags: ["Parents"],
    }),
    deleteParent: builder.mutation({
        query: (id) => ({
            url: `/parents/${id}`,
            method: "DELETE",
        }),
        invalidatesTags: ["Parents"],
    }),
  }),
});

export const { useGetParentsQuery, useCreateParentMutation, useUpdateParentMutation, useDeleteParentMutation } = parentApi;