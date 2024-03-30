import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ordered, restocked } from './iceCreamSlice';

export const IceCreamView = () => {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of iceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock iceCreams</button>
    </div>
  );
};
