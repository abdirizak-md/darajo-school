
import { apiSlice } from "../api/apiSlice";

export const examApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // 📄 GET ALL EXAM MARKS
    getExamMarks: builder.query({
      query: () => "/exams",
      providesTags: ["Exam"],
    }),
    // ➕ CREATE EXAM MARK
    createExamMark: builder.mutation({
      query: (data) => ({
        url: "/exams",
        method: "POST",
        body: data,
        }),
        invalidatesTags: ["Exam"], // 🔥 refresh list
    }),
    // ✏️ UPDATE EXAM MARK
    updateExamMark: builder.mutation({
        query: ({ id, ...data }) => ({
        url: `/exams/${id}`,
        method: "PUT",
        body: data,
        }),
        invalidatesTags: ["Exam"],
    }),
    // ❌ DELETE EXAM MARK
    deleteExamMark: builder.mutation({
        query: (id) => ({
        url: `/exams/${id}`,       
        method: "DELETE",
        }),
        invalidatesTags: ["Exam"],
    }),
  }),
});

export const {
  useGetExamMarksQuery,
  useCreateExamMarkMutation,
    useUpdateExamMarkMutation,
    useDeleteExamMarkMutation,
} = examApi;