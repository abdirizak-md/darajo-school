import { apiSlice } from "../api/apiSlice";

export const entryMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // ✅ Load students
    getStudents: builder.query({
      query: ({ classId, sectionId }) => ({
        url: "/marks-entry",
        method: "GET",
        params: { classId, sectionId },
      }),
      providesTags: ["MarksEntry"],
    }),

    // ✅ Save marks (bulk)
    saveMarks: builder.mutation({
      query: (data) => ({
        url: "/marks-entry",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["MarksEntry"],
    }),

  }),
});

export const {
  useGetStudentsQuery,
  useSaveMarksMutation,
} = entryMarkApi;