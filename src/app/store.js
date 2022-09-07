import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from '../features/transection/transactionSlice'

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
  },
});
