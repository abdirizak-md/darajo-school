import { apiSlice } from "../api/apiSlice";

export const feeTypeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getFeeTypes: builder.query({
      query: () => "/feeTypes",
    }),

  }),
});

export const {
  useGetFeeTypesQuery,
} = feeTypeApi;