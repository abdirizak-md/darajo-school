import { apiSlice } from "../api/apiSlice";

export const studentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // ➕ CREATE STUDENT
    createStudent: builder.mutation({
      query: (data) => ({
        url: "/students",
        method: "POST",
        body: data,
      }),
    }),

    // 📄 GET ALL STUDENTS (with filters)
   getStudents: builder.query({
  query: (params = {}) => {
    const { classId, sectionId, page = 1, limit = 10 } = params;

    let url = `/students?page=${page}&limit=${limit}`;

    if (classId) url += `&classId=${classId}`;
    if (sectionId) url += `&sectionId=${sectionId}`;

    return url;
  },
}),

    // 🔍 GET SINGLE STUDENT
  getStudent: builder.query({
  query: (id) => {
    if (!id) throw new Error("Student ID is required");
    return `/students/${id}`;
  },
}),
    // ✏️ UPDATE STUDENT
    updateStudent: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/students/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    // ❌ DELETE STUDENT
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
    }),

  }),
});

export const {
  useCreateStudentMutation,
  useGetStudentsQuery,
  useGetStudentQuery,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentApi;