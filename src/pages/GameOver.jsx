import React, { useState, useEffect } from 'react';
import { useScore } from '../context/ScoreContext';
import { useAuth0 } from '@auth0/auth0-react';

import { StyledLink } from '../styled/Navbar';
import { StyledCharacter } from '../styled/Game';
import { StyledTitle } from '../styled/Random';

const GameOver = ({ history }) => {
  const [score] = useScore();
  const [message, setMessage] = useState('');
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  if (score === -1) {
    history.push('/');
  }

  useEffect(() => {
    const abortController = new AbortController();
    const saveHighScore = async () => {
      try {
        const token = await getAccessTokenSilently();
        const options = {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
    if (isAuthenticated) {
      saveHighScore();
    } else {
      setMessage('You should login or signup to compete for high scores');
    }

    return () => abortController.abort();
  }, [score, getAccessTokenSilently, isAuthenticated]);

  return (
    <div>
      <StyledTitle>GameOver</StyledTitle>
      <h2>{message}</h2>
      <StyledCharacter>{score}</StyledCharacter>
      <div>
        <StyledLink to='/'>Go Home</StyledLink>
      </div>
      <div>
        <StyledLink to='/game'>Play Again</StyledLink>
      </div>
    </div>
  );
};

export default GameOver;
