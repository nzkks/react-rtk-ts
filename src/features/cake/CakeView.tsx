import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
  const numOfCakes = useAppSelector(state => state.cake.numOfCakes);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(1);

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <input type="text" value={value} onChange={e => setValue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(value))}>Restock cakes</button>
    </div>
  );
};
