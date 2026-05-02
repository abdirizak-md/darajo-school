

import { apiSlice } from "../api/apiSlice";

export const feeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // 📄 GET ALL EXAM MARKS
    getFees: builder.query({
      query: () => "/fees",
      providesTags: ["Fee"],
    }),
    // ➕ CREATE EXAM MARK
    createFee: builder.mutation({
      query: (data) => ({
        url: "/fees",
        method: "POST",
        body: data,
        }),
        invalidatesTags: ["Fee"], // 🔥 refresh list
    }),
    // ✏️ UPDATE EXAM MARK
    updateFee: builder.mutation({
        query: ({ id, ...data }) => ({
        url: `/fees/${id}`,
        method: "PUT",
        body: data,
        }),
        invalidatesTags: ["Fee"],
    }),
    // ❌ DELETE EXAM MARK
    deleteFee: builder.mutation({
        query: (id) => ({
        url: `/fees/${id}`,       
        method: "DELETE",
        }),
        invalidatesTags: ["Fee"],
    }),
  }),
});

export const {
 useCreateFeeMutation,
 useDeleteFeeMutation,
 useGetFeesQuery,
 useUpdateFeeMutation
} = feeApi;