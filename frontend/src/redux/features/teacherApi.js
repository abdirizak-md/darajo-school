import { apiSlice } from "../api/apiSlice";

export const teacherApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // 📄 GET ALL TEACHERS
    getTeachers: builder.query({
      query: () => "/teachers",
      providesTags: ["Teacher"],
    }),

    // 🔍 GET SINGLE TEACHER
    getTeacherById: builder.query({
      query: (id) => `/teachers/${id}`,
      providesTags: ["Teacher"],
    }),

    // ➕ CREATE TEACHER
    createTeacher: builder.mutation({
      query: (data) => ({
        url: "/teachers",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Teacher"],
    }),

    // ✏️ UPDATE TEACHER
    updateTeacher: builder.mutation({
      query: ({ id, data }) => ({
        url: `/teachers/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Teacher"],
    }),

    // ❌ DELETE TEACHER
    deleteTeacher: builder.mutation({
      query: (id) => ({
        url: `/teachers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Teacher"],
    }),
  }),
});

export const {
  useGetTeachersQuery,
  useGetTeacherByIdQuery,
  useCreateTeacherMutation,
  useUpdateTeacherMutation,
  useDeleteTeacherMutation,
} = teacherApi;