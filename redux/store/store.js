import { configureStore } from '@reduxjs/toolkit';
import counter from '../slices/counterSlice';
import logged from '../slices/loggedSlice';
import users from '../slices/usersSlice';

export const store = configureStore({
  reducer: {
    counter,
    logged,
    users,
  },
});
