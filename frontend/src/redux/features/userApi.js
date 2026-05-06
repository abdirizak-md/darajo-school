import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Unified login endpoint
    login: builder.mutation({
        query: (credentials) => ({
            url: "/users",
            method: "POST",
            body: credentials,
        }),
    }),
    // ✅ Unified registration endpoint
    register: builder.mutation({
        query: (data) => ({
            url: "/users",
            method: "POST",
            body: data,
        }),
    }),
  }),
});

/// 

export const { useLoginMutation, useRegisterMutation } = userApi;