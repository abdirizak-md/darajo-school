import { apiSlice } from "../api/apiSlice";

export const examTypeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Load exam types
    getExamTypes: builder.query({
      query: () => ({       
        url: "/examTypes",
        method: "GET",
      }),
        providesTags: ["ExamTypes"],
    }),
  }),
});

export const { useGetExamTypesQuery } = examTypeApi;