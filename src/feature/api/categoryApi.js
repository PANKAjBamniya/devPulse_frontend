import { apiSlice } from "./apiSlice"

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getCategories: builder.query({
            query: () => "/category",
            providesTags: ["Category"],
        }),

        createCategory: builder.mutation({
            query: (body) => ({
                url: "/category",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Category"],
        }),

        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Category"],
        }),

    }),
})

export const {
    useGetCategoriesQuery,
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
} = categoryApi
