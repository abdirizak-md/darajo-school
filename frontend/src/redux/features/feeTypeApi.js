import { apiSlice } from "../api/apiSlice";

export const feeTypeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getFeeTypes: builder.query({
      query: () => "/fee-type",
      providesTags: ["FeeType"],
    }),

    createFeeType: builder.mutation({
      query: (data) => ({
        url: "/fee-type",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["FeeType"],
    }),

    updateFeeType: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/fee-type/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["FeeType"],
    }),

    deleteFeeType: builder.mutation({
      query: (id) => ({
        url: `/fee-type/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FeeType"],
    }),
  }),
});

export const {
  useGetFeeTypesQuery,
  useCreateFeeTypeMutation,
  useUpdateFeeTypeMutation,
  useDeleteFeeTypeMutation,
} = feeTypeApi;