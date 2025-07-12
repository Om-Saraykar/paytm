import { configureStore } from '@reduxjs/toolkit';
import balance from './slices/balance';

export const store = configureStore({
  reducer: {
    balance,
  },
});

export type RootState = ReturnType<typeof store.getState>;
