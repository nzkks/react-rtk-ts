import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ordered as cakeOrdered } from '../cake/cakeSlice';

type InitalState = {
  numOfIceCreams: number;
};

const initialState: InitalState = {
  numOfIceCreams: 20
};

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfIceCreams--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    }
  },
  // The object notation for `createSlice.extraReducers` has been removed
  // extraReducers: {
  //   ['cake/ordered']: state => {
  //     state.numOfIceCreams--;
  //   }
  // }
  extraReducers: builder => {
    builder.addCase(cakeOrdered, state => {
      state.numOfIceCreams--;
    });
  }
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
