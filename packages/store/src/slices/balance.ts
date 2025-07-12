import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: 0,
  reducers: {
    setBalance: (_state, action: PayloadAction<number>) => action.payload,
  },
});

export const { setBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
