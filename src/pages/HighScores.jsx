import React from 'react';
import { useQuery } from 'react-query';

import { StyledListItem } from '../styled/HighScores';

async function getHighScores() {
  const res = await fetch('/.netlify/functions/getHighScores');
  const data = await res.json();
  return data;
}

const HighScores = () => {
  const { data: scores, status, error } = useQuery('highscores', getHighScores);

  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error')
    return <h1>An Unexpected error occured {error.message}</h1>;
  return (
    <div>
      <h1>HighScores</h1>
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
