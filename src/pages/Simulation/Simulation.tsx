import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreType } from 'redux/store';
import { thunkTogglePause } from 'redux/reducers/world';

import { Button } from 'components/Button/Button';
import './Simulation.scss';

export const Simulation = () => {
  const dispatch = useDispatch();
  const currentIteration = useSelector((store: StoreType) => store.worldReducer.iteration);

  const Тык = () => {
    dispatch(thunkTogglePause());
  };

  return (
    <div className='myBlock'>
      <h1>Ты в симуляции</h1>
      <Button size='small' content='123' onClick={Тык} />
      <br />
      {currentIteration}
    </div>
  );
};
