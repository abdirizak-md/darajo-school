import { apiSlice } from "../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getPayments: builder.query({
      query: () => "/payment",
      providesTags: ["Payment"],
    }),

    createPayment: builder.mutation({
      query: (data) => ({
        url: "/payment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Payment"],
    }),

    updatePayment: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/payment/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Payment"],
    }),

    deletePayment: builder.mutation({
      query: (id) => ({
        url: `/payment/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Payment"],
    }),
  }),
});

export const {
  useGetPaymentsQuery,
  useCreatePaymentMutation,
  useUpdatePaymentMutation,
  useDeletePaymentMutation,
} = paymentApi;