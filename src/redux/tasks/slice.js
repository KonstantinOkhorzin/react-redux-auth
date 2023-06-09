import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import { fetchTasks, addTask, deleteTask } from './operations';

const tasksAdapter = createEntityAdapter();

const initialState = tasksAdapter.getInitialState({
  isLoading: false,
  error: null,
});

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
        tasksAdapter.setAll(state, action.payload);
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        tasksAdapter.addOne(state, action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        tasksAdapter.removeOne(state, action.payload.id);
      })
      .addCase(logOut.fulfilled, state => {
        tasksAdapter.removeAll(state);
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

export const { selectAll: selectAllTasks } = tasksAdapter.getSelectors(state => state.tasks);
