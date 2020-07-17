import React, { useState, useEffect } from 'react';

import { StyledListItem } from '../styled/HighScores';

const HighScores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const loadHighScores = async () => {
      try {
        const res = await fetch('/.netlify/functions/getHighScores');
        const scores = await res.json();
        setScores(scores);
      } catch (error) {
        console.error(error);
      }
    };
    loadHighScores();
  }, []);

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
