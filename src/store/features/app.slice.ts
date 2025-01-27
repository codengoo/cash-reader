import {createSlice} from '@reduxjs/toolkit';

export interface CRAppState {}

const initialState: CRAppState = {};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetApp: state => {},
  },
  selectors: {},
});

export const {resetApp} = appSlice.actions;
export const {} = appSlice.selectors;

export default appSlice.reducer;
