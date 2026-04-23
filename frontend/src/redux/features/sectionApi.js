import { apiSlice } from "../api/apiSlice";

export const sectionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // 📄 GET ALL SECTIONS
    getSections: builder.query({
      query: () => "/sections",
      providesTags: ["Section"],
    }),

    // ➕ CREATE SECTION
    createSection: builder.mutation({
      query: (data) => ({
        url: "/sections",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Section"], // 🔥 refresh list
    }),

    // ✏️ UPDATE SECTION
    updateSection: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/sections/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Section"],
    }),

    // ❌ DELETE SECTION
    deleteSection: builder.mutation({
      query: (id) => ({
        url: `/sections/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Section"],
    }),

  }),
});

export const {
  useGetSectionsQuery,
  useCreateSectionMutation,
  useUpdateSectionMutation,
  useDeleteSectionMutation,
} = sectionApi;