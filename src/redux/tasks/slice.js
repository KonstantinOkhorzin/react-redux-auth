import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import { fetchTasks, addTask, deleteTask } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(task => task.id === action.payload.id);
        state.items.splice(index, 1);
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchTasks.pending, handlePending)
      .addCase(addTask.pending, handlePending)
      .addCase(deleteTask.pending, handlePending)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.rejected, handleRejected)
      .addDefaultCase(() => {});
  },
});

export const tasksReducer = tasksSlice.reducer;
