import React from 'react';
import useHighScore from '../hooks/useHighScore';

import { StyledListItem } from '../styled/HighScores';
import { StyledTitle } from '../styled/Random';

const HighScores = () => {
  const { scores, status, error } = useHighScore();

  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error')
    return <h1>An Unexpected error occured {error.message}</h1>;
  return (
    <div>
      <StyledTitle>HighScores</StyledTitle>
      <ol>
        {scores.map((score) => (
          <StyledListItem key={score.id}>
            {score.fields.Name} - {score.fields.Score}
          </StyledListItem>
        ))}
      </ol>
    </div>
  );
};

export default HighScores;
