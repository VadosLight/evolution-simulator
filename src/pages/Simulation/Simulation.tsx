import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreType } from 'redux/store';
import { thunkIterateWorld, thunkTogglePause } from 'redux/reducers/world';

import { Button } from 'components/Button/Button';

export const Simulation = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<number>(0);
  const currentIteration = useSelector((state: StoreType) => state.worldReducer.iteration);

  const Тык = () => {
    setState((prev) => prev + 1);
    dispatch(thunkTogglePause());
  };

  return (
    <div>
      <h1>Ты в симуляции</h1>
      <Button size='s' content='Тык' onClick={Тык} />
      <br />
      {state}
      <br />
      {currentIteration}
    </div>
  );
};
