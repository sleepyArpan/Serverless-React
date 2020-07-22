import React, { useState, useEffect } from 'react';
import { useScore } from '../context/ScoreContext';

import { StyledLink } from '../styled/Navbar';
import { StyledCharacter } from '../styled/Game';
import { StyledTitle } from '../styled/Random';

const GameOver = ({ history }) => {
  const [score] = useScore();
  const [message, setMessage] = useState('');

  if (score === -1) {
    history.push('/');
  }

  useEffect(() => {
    const abortController = new AbortController();
    const saveHighScore = async () => {
      try {
        const options = {
          method: 'POST',
          body: JSON.stringify({
            Name: 'asghaifgi',
            Score: score,
          }),
          signal: abortController.signal,
        };
        const res = await fetch('/.netlify/functions/saveHighScore', options);
        const data = await res.json();
        if (data.id) {
          setMessage('Congrats you got a top 10 score');
        } else {
          setMessage('Keep trying and you will eventually get a high score!');
        }
      } catch (error) {
        console.log(error);
      }
    };
    saveHighScore();

    return () => abortController.abort();
  }, [score]);

  return (
    <div>
      <StyledTitle>GameOver</StyledTitle>
      <h2>{message}</h2>
      <StyledCharacter>{score}</StyledCharacter>
      <StyledLink to='/'>Go Home</StyledLink>
      <StyledLink to='/game'>Play Again</StyledLink>
    </div>
  );
};

export default GameOver;
