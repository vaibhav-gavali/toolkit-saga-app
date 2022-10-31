import { createSlice } from '@reduxjs/toolkit';

const CATS_STATE = 'cats';

//Create this to use in Sagas
const FUNC_GETS_CATS_FETCH = 'getCatsFetch';
const FUNC_GETS_CATS_SUCCESS = 'getCatsSuccess';
const FUNC_GETS_CATS_FAILURE = 'getCatsFailure';

export const catSlice = createSlice({
  name: [CATS_STATE],
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCatsFetch, getCatsSuccess, getCatsFailure } =
  catSlice.actions;
export {
  CATS_STATE,
  FUNC_GETS_CATS_FETCH,
  FUNC_GETS_CATS_SUCCESS,
  FUNC_GETS_CATS_FAILURE,
};
export default catSlice.reducer;
