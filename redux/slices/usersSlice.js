import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: false,
  users: [],
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error(error);
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    [fetchUsers.error]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export const { logout } = usersSlice.actions;

export default usersSlice.reducer;
