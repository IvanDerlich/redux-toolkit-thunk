import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logged: false,
};

export const loggedSlice = createSlice({
  name: 'logged',
  initialState,
  reducers: {
    loggedInOutToggle: (state) => {
      state.logged = !state.logged;
    },
  },
});

export const { loggedInOutToggle } = loggedSlice.actions;

export default loggedSlice.reducer;
