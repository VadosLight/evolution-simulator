import React, { useState } from 'react';
import { Button } from 'components/Button/Button';

export const Simulation = () => {
  const [state, setState] = useState<number>(0);
  const onClickSim = () => {
    setState((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Ты в симуляции</h1>
      <Button size='s' content='Тык' onClick={onClickSim} />
      {state}
    </div>
  );
};
