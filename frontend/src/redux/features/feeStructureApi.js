import { apiSlice } from "../api/apiSlice";

export const feeStructureApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getFeeStructureByClass: builder.query({
      query: (classId) => `/fee-structures/class/${classId}`,
    }),

  }),
});

export const {
  useGetFeeStructureByClassQuery,
} = feeStructureApi;