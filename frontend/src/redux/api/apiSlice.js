import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api", // ✅ correct for Vite proxy
  }),
  tagTypes: ["Student", "Teacher", "Class"],
  endpoints: () => ({}),
});