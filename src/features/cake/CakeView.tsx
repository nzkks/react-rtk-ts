import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();

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
