import { io } from "socket.io-client";
import { apiSlice } from "../api/apiSlice";

export const messagesApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getMessages: builder.query({
			query: ({id, myEmail}) => `/messages?conversationId_like=${id}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_MESSAGES_PER_PAGE}`,

			async onCacheEntryAdded(arg, {
				updateCachedData, cacheDataLoaded, cacheEntryRemoved
			}) {

				// create socket
				const socket = io('https://lws-app-chat.herokuapp.com/', {
					reconnectionDelay: 1000,
					reconnection: true,
					reconnectionAttemps: 10,
					transports: ["websocket"],
					agent: false,
					upgrade: false,
					rejectUnauthorized: false,
				});

				try{
					await cacheDataLoaded;
					socket.on('messages', (data) => {
						
						updateCachedData((draft) => {
							console.log('socket is responsing')
							
							const receiverEmail = data.data.sender.email;
							const senderEmail = arg.myEmail; 
						
							if(senderEmail !== receiverEmail) {
								if(data.data.conversationId.toString() === arg.id) {
									draft.push(data.data)
								}
							}
						})
					});
				} catch(err) {

				}
			}
		}),

		getMoreMessages: builder.query({
			query: ({id, page}) => `/messages?conversationId_like=${id}&_sort=timestamp&_order=desc&_page=${page}&_limit=${process.env.REACT_APP_MESSAGES_PER_PAGE}`,

			async onQueryStarted({id}, {queryFulfilled, dispatch}) {

				try {
					const messages = await queryFulfilled;
					if(messages?.length > 0) {
						
						// update conversation cache pessimistically start here
						dispatch(
							apiSlice.util.updateQueryData('getMessages', id, (draft) => {
								return {
									data: [...draft.data,
									...messages.data],
									totalCount: Number(draft.totalCount),
								}
							})
						);
						// update conversation cache pessimistically end here
					}
				} catch(err) {}
			}

		}),

		addMessage: builder.mutation({
			query: (data) => ({
				url: `/messages`,
				method: 'POST',
				body: data,
			}),
		}),
	}),
});

export const {useGetMessagesQuery, useAddMessageMutation, useGetMoreMessagesQuery} = messagesApi;
