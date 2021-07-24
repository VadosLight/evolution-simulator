import React from 'react';
import { useHistory } from 'react-router';
import Glider from 'assets/svg/glider.svg';

import { Button } from 'components/Button/Button';

import './Welcome.scss';

export const Welcome = (): JSX.Element => {
  const history = useHistory();
  const onClickStart = () => {
    history.push('simulation');
  };

  return (
    <div id='welcome'>
      <h1 id='welcome__header'>Добро пожаловать</h1>
      <img id='welcome__glider' src={Glider} alt='Glider' className='rotate' />
      <Button size='l' onClick={onClickStart} content='Перейти к игре' />
    </div>
  );
};
