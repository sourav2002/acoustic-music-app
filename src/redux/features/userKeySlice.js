import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user_key: '',
};

const userKeySlice = createSlice({
  name: 'key',
  initialState,
  reducers: {
    setUserKey: (state, action) => {
      state.user_key = action.payload.mykey;
    },
  },
});

export const { setUserKey } = userKeySlice.actions;
export default userKeySlice.reducer;
