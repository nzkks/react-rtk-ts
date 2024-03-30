import React from 'react';

import { ordered, restocked } from './iceCreamSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export const IceCreamView = () => {
  const numOfIceCreams = useAppSelector(state => state.iceCream.numOfIceCreams);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of iceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock iceCreams</button>
    </div>
  );
};
