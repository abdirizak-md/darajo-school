import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api", // ✅ keep this (Vite proxy)

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      console.log("API TOKEN:", token);

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Student", "Teacher", "Class", "Exam"], // add Exam too
  endpoints: () => ({}),
});