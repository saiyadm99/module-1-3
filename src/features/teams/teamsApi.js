import { apiSlice } from "../api/apiSlice";

export const teamsApi = apiSlice.injectEndpoints({
	tagTypes: ['Team'],
	endpoints: (builder) => ({
		getTeams: builder.query({
			query: ({myEmail}) => `/teams?members_like=${myEmail}`,
			providesTags: ['Team']
		}),

		getAllTeam: builder.query({
			query: () => '/teams',
			providesTags: ['Team']
		}),

		getTeam: builder.query({
			query: (id) => `/teams${id}`,
			providesTags: ['Team']
		}),

		addTeam: builder.mutation({
			query: ({data}) => ({
				url: `/teams`,
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Team']
		}),

		editTeam: builder.mutation({
			query: ({id, data}) => ({
				url: `/teams/${id}`,
				method: 'PATCH',
				body: data,
			}),
			invalidatesTags: ['Team']
		})
	}),
});

export const { useGetTeamsQuery, useGetAllTeamsQuery, useGetTeamQuery, useAddTeamMutation, useEditTeamMutation, } = teamsApi;
