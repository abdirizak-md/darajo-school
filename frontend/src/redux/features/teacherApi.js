import { apiSlice } from "../api/apiSlice";

export const teacherApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => "/teachers",
      providesTags: ["Teacher"],
    }),
  }),
});

export const {
  useGetTeachersQuery,
} = teacherApi;