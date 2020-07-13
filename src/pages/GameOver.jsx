import React from 'react';
import { useScore } from '../context/ScoreContext';

import { StyledLink } from '../styled/Navbar';

const GameOver = ({ history }) => {
  const [score] = useScore();

  if (score === -1) {
    history.push('/');
  }

  return (
    <div>
      <h1>GameOver</h1>
      <p>{score}</p>
      <StyledLink to='/'>Go Home</StyledLink>
      <StyledLink to='/game'>Play Again</StyledLink>
    </div>
  );
};

export default GameOver;
