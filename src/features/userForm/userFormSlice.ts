import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchFormMetaData } from './userFormAPI';

export interface UserFormState {
    status: 'idle' | 'loading' | 'failed';
    metaData: any;
    userData: any;
}

const initialState: UserFormState = {
    status: 'idle',
    metaData: null,
    userData: null
};

export const fetchMetaDataAsync = createAsyncThunk(
    'userForm/fetchMetaData',
    async () => {
        const response = await fetchFormMetaData();
        return response;
    }
);

export const userFormSlice = createSlice({
    name: 'userForm',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      setUserData: (state, action) => {
        state.userData = action.payload
      },
      clearUserData: (state) => {
        state.userData = null
      },

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchMetaDataAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchMetaDataAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.metaData = action.payload
          })
          .addCase(fetchMetaDataAsync.rejected, (state) => {
            state.status = 'failed';
          });
      },
})

export const selectStatus = (state: RootState) => state.userForm.status;
export const selectMetaData = (state: RootState) => state.userForm.metaData;
export const selectUserData = (state: RootState) => state.userForm.userData;

export const { setUserData, clearUserData } = userFormSlice.actions;

export default userFormSlice.reducer;