import { apiSlice } from "../api/apiSlice";

export const subjectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // 📄 GET ALL SUBJECTS
    getSubjects: builder.query({
      query: () => "/subjects",
      providesTags: ["Subject"],
    }),

    // 🔍 GET SINGLE SUBJECT
    getSubject: builder.query({
      query: (id) => `/subjects/${id}`,
      providesTags: ["Subject"],
    }),

    // ➕ CREATE SUBJECT
    createSubject: builder.mutation({
      query: (data) => ({
        url: "/subjects",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Subject"],
    }),

    // ✏️ UPDATE SUBJECT
    updateSubject: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/subjects/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Subject"],
    }),

    // ❌ DELETE SUBJECT
    deleteSubject: builder.mutation({
      query: (id) => ({
        url: `/subjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Subject"],
    }),

  }),
});

export const {
  useGetSubjectsQuery,
  useGetSubjectQuery,
  useCreateSubjectMutation,
  useUpdateSubjectMutation,
  useDeleteSubjectMutation,
} = subjectApi;