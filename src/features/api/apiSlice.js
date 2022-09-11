import {createApi, fetchBaseQuery} from"@reduxjs/toolkit/query/react" 

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://lwsjson.herokuapp.com/',
	}),
	tagTypes: ['Todos'],
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => '/todos',
			keepUnusedDataFor: 600,
			providesTags: ['Todos'],
		}),
		addTodo: builder.mutation({
			query: (data) => ({
				url: '/todos',
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Todos']
		}),
		editTodo: builder.mutation({
			query: ({id, data}) => ({
				url: `/todos/${id}`,
				method: 'PATCH',
				body: data,
			}),
			invalidatesTags: ['Todos']
		}),
		deleteTodos: builder.mutation({
			query: (id) => ({
				url: `/todos/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['Todos']
		}),
	})
});

export const {useGetTodosQuery,useAddTodoMutation, useEditTodoMutation, useDeleteTodosMutation} = apiSlice;