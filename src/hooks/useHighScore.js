import { useQuery } from 'react-query';

async function getHighScores() {
  const res = await fetch('/.netlify/functions/getHighScores');
  const data = await res.json();
  return data;
}

export default function useHighScore() {
  const { data: scores, status, error } = useQuery('highscores', getHighScores);

  return {
    scores,
    status,
    error,
  };
}
