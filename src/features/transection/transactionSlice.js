import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addTransaction, deleteTransaction, editTransaction, getTransections } from "./transectionAPI"


const initialState = {
	transactions: [],
	isLoading: false,
	isError: false,
	error: '',
	editing: {},
	pageListEditing: {},
	searchField: '',
	transactionType: '',
}

//async thunk
export const fetchTransactions = createAsyncThunk('transaction/fetchTransactions', async () => {
	const transactions = await getTransections();
	return transactions;
});

export const createTransaction = createAsyncThunk('transaction/createTransaction', async (data) => {
	const transaction = await addTransaction(data);
	return transaction;
});

export const changeTransaction = createAsyncThunk('transaction/changeTransaction', async ({id, data}) => {
	const transaction = await editTransaction(id, data);
	return transaction;
});

export const removeTransaction = createAsyncThunk('transaction/removeTransaction', async(id) => {
	const transaction = await deleteTransaction(id)
	return transaction;
});


// create slice
const transactionSlice = createSlice({
	name: 'transaction',
	initialState: initialState,
	reducers: {
		editActive: (state, action) => {
			state.editing = action.payload;
		},
		editInActive: (state) => {
			state.editing = {};
		},
		pageListEditActive: (state, action) => {
			state.pageListEditing = action.payload;
		},
		pageListEditInActive: (state) => {
			state.pageListEditing = {};
		},
		changeSearch: (state, action) => {
			state.searchField = action.payload;
		},
		changeType: (state, action) => {
			state.transactionType = action.payload;
		},
		resetFilter: (state, action) => {
			state.searchField = '';
			state.transactionType = '';
		} 
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTransactions.pending, (state) => {
				state.isError = false;
				state.isLoading = true
			})

			.addCase(fetchTransactions.fulfilled, (state, action) => {
				state.isError = false;
				state.isLoading = false;
				state.transactions = action.payload;
			})

			.addCase(fetchTransactions.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error.message;
				state.transactions = [];
			})


			// create transaction
			.addCase(createTransaction.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})

			.addCase(createTransaction.fulfilled, (state, action) => {
				state.isError = false;
				state.isLoading = false;
				state.transactions.push(action.payload);
			})

			.addCase(createTransaction.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error.message;
			})


			// change transaction
			.addCase(changeTransaction.pending, (state) => {
				state.isError = false;
				state.isLoading = true
			})

			.addCase(changeTransaction.fulfilled, (state, action) => {
				state.isError = false;
				state.isLoading = false;
				
				const indexToUpdate = state.transactions.findIndex(t => t.id === action.payload.id);

				state.transactions[indexToUpdate] = action.payload;
			})

			.addCase(changeTransaction.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error.message;
			})


			// delete transaction
			.addCase(removeTransaction.pending, (state) => {
				state.isError = false;
				state.isLoading = true
			})

			.addCase(removeTransaction.fulfilled, (state, action) => {
				state.isError = false;
				state.isLoading = false;
				
				state.transactions = state.transactions.filter(t => t.id !== action.meta.arg)
			})

			.addCase(removeTransaction.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error.message;
			})
	}
})

export default transactionSlice.reducer;
export const {editActive, editInActive, pageListEditActive, pageListEditInActive, changeSearch, changeType, resetFilter} = transactionSlice.actions;
