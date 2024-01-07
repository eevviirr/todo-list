import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ITodo {
    _id: string;
    title: string;
    description: string;
    status: string;
}
interface IBody {
    title: string;
    description: string;
    status: string;
}

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getTodos: builder.query<ITodo[], any>({
            query: (search) => `/search?s=${search}`,
            providesTags: ["Todos"],
        }),
        getTodoById: builder.query<ITodo, any>({
            query: (id: string) => id,
        }),
        deleteTodo: builder.mutation({
            query: (id: string) => ({
                url: `/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Todos"],
        }),
        editTodo: builder.mutation({
            query: ({ id, body }: { id: string; body: IBody }) => ({
                url: `/edit/${id}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["Todos"],
        }),
        addTodo: builder.mutation({
            query: (body: IBody) => ({
                url: "add",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Todos"],
        }),
    }),
});

export const {
    useGetTodosQuery,
    useGetTodoByIdQuery,
    useDeleteTodoMutation,
    useEditTodoMutation,
    useAddTodoMutation,
} = todoApi;
