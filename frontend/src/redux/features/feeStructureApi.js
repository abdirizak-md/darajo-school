import { apiSlice } from "../api/apiSlice";

export const feeStructureApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getFeeStructures: builder.query({
      query: () => "/fee-structure",
      providesTags: ["FeeStructure"],
    }),

    getFeeStructureByClass: builder.query({
      query: (classId) => `/fee-structure/class/${classId}`,
      providesTags: ["FeeStructure"],
    }),

    createFeeStructure: builder.mutation({
      query: (data) => ({
        url: "/fee-structure",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["FeeStructure"],
    }),

    updateFeeStructure: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/fee-structure/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["FeeStructure"],
    }),

    deleteFeeStructure: builder.mutation({
      query: (id) => ({
        url: `/fee-structure/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FeeStructure"],
    }),
  }),
});

export const {
  useGetFeeStructuresQuery,
  useGetFeeStructureByClassQuery,
  useCreateFeeStructureMutation,
  useUpdateFeeStructureMutation,
  useDeleteFeeStructureMutation,
} = feeStructureApi;