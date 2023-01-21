import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const contactsFilter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = contactsFilter.actions;

export default contactsFilter.reducer;
