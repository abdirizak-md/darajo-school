import { apiSlice } from "../api/apiSlice";

export const attendanceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    // ✅ GET attendance
    getAttendance: builder.query({
      query: ({ classId, sectionId, date }) => ({
        url: "/attendances",
        params: { classId, sectionId, date },
      }),
    }),

    // ✅ SAVE attendance (NEW)
    saveAttendance: builder.mutation({
      query: (data) => ({
        url: "/attendances",
        method: "POST",
        body: data,
      }),
    }),

  }),
});

export const {
  useGetAttendanceQuery,
  useLazyGetAttendanceQuery,
  useSaveAttendanceMutation,
} = attendanceApi;