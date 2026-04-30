import { apiSlice } from "../api/apiSlice";

export const assignModuleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // ✅ Get assignments (with filters)
    getAssignments: builder.query({
      query: (params) => ({
        url: "/assign-teacher",
        method: "GET",
        params, // { teacherId, classId, sectionId }
      }),
      providesTags: ["SubjectAssign"],
    }),

    // ✅ Assign teacher to subject/class
    createAssignment: builder.mutation({
      query: (data) => ({
        url: "/assign-teacher",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["SubjectAssign"],
    }),

    // ✅ Delete assignment (optional but important)
    deleteAssignment: builder.mutation({
      query: (id) => ({
        url: `/assign-teacher/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SubjectAssign"],
    }),

  }),
});

export const {
  useGetAssignmentsQuery,
  useCreateAssignmentMutation,
  useDeleteAssignmentMutation,
} = assignModuleApi;