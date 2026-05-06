import { apiSlice } from "../api/apiSlice";

export const examApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // 📄 GET ALL EXAMS
    getExams: builder.query({
      query: () => "/exams",
      providesTags: ["Exam"],
    }),

    // 🔍 GET SINGLE EXAM (optional but useful)
    getExamById: builder.query({
      query: (id) => `/exams/${id}`,
      providesTags: (result, error, id) => [{ type: "Exam", id }],
    }),

    // ➕ CREATE EXAM
    createExam: builder.mutation({
      query: (data) => ({
        url: "/exams",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Exam"],
    }),

    // ✏️ UPDATE EXAM
    updateExam: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/exams/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Exam"],
    }),

    // ❌ DELETE EXAM
    deleteExam: builder.mutation({
      query: (id) => ({
        url: `/exams/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Exam"],
    }),

  }),
});

export const {
  useGetExamsQuery,
  useGetExamByIdQuery,
  useCreateExamMutation,
  useUpdateExamMutation,
  useDeleteExamMutation,
} = examApi;