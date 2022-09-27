import { apiSlice } from "../api/apiSlice";

export const stagesApi = apiSlice.injectEndpoints({
	tagTypes: ['Projects'],
	endpoints: (builder) => ({
		getProjects: builder.query({
			query: () => `/projects?_sort=timestamp&_order=desc`,
			providesTags: ['Projects']
		}),

		addProjects: builder.mutation({
			query: ({data}) => ({
				url: `/projects`,
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Projects']
		}),

		editProjects: builder.mutation({
			query: ({id, data}) => ({
				url: `/projects/${id}`,
				method: 'PATCH',
				body: data,
			}),
			invalidatesTags: ['Projects']
		}),

		deleteProject: builder.mutation({
			query: ({id}) => ({
				url: `/projects/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Projects']
		})
	}),
});

export const {useGetProjectsQuery , useAddProjectsMutation, useEditProjectsMutation, useDeleteProjectMutation} = stagesApi;
