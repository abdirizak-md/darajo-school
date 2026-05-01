import { use } from "react";
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

    
    deleteClass: builder.mutation({
      query: (id) => ({
        url: `/classes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Class"],
    }),
  
    updateClass: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/classes/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Class"],
    }),

  }),


});

export const {
  useCreateClassMutation,
  useGetClassesQuery,
  useDeleteClassMutation,
  useUpdateClassMutation
} = classApi;