import { apiSlice } from "../api/apiSlice";

export const assignModuleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // ✅ GET ASSIGNMENTS (FIXED: safe params handling)
    getAssignments: builder.query({
      query: (params = {}) => ({
        url: "/assign-teacher",
        method: "GET",
        params, // { teacherId, classId, sectionId, subjectId }
      }),
      providesTags: ["SubjectAssign"],
    }),

    // ✅ CREATE ASSIGNMENT
    createAssignment: builder.mutation({
      query: (data) => ({
        url: "/assign-teacher",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["SubjectAssign"],
    }),

    // ✅ DELETE ASSIGNMENT
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