import { apiSlice } from "./apiSlice"

export const scheduleApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getMyAllSchedules: builder.query({
            query: () => "/schedule/me",
            providesTags: ["Schedule"],
        }),


        getMySchedule: builder.query({
            query: (socialAccountId) => `/schedule/${socialAccountId}`,
            providesTags: ["Schedule"],
        }),


        getMyAllPost: builder.query({
            query: () => "/posts/",
            providesTags: ["Post"],
        }),


        createSchedule: builder.mutation({
            query: (payload) => ({
                url: "/schedule",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ["Schedule"],
        }),


        updateSchedule: builder.mutation({
            query: (payload) => ({
                url: "/schedule",
                method: "PUT",
                body: payload,
            }),
            invalidatesTags: ["Schedule"],
        }),

        toggleSchedule: builder.mutation({
            query: (payload) => ({
                url: "/schedule/toggle",
                method: "PATCH",
                body: payload,
            }),
            invalidatesTags: ["Schedule"],
        }),
    }),
})

export const {
    useGetMyScheduleQuery,
    useCreateScheduleMutation,
    useUpdateScheduleMutation,
    useToggleScheduleMutation,
    useGetMyAllPostQuery,
    useGetMyAllSchedulesQuery
} = scheduleApi