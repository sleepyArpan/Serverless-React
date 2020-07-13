import React, { useState, useEffect } from 'react';
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter,
} from '../styled/Game';
import { Strong, Accent } from '../styled/Random';

const Game = ({ history }) => {
  const [score, setScore] = useState(0);
  const MAX_SECONDS = 5;
  const [ms, setMs] = useState(0);
  const [seconds, setSeconds] = useState(MAX_SECONDS);

  useEffect(() => {
    const currentTime = new Date();
    const interval = setInterval(() => updateTime(currentTime), 1);
    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, []);

  const updateTime = (startTime) => {
    const endTime = new Date();
    const msPassedStr = (endTime.getTime() - startTime.getTime()).toString();
    const formattedMsString = ('0000' + msPassedStr).slice(-5); // 00000 - first 2 seconds, last 3 are the ms that have passed
    const updatedSeconds =
      MAX_SECONDS - parseInt(formattedMsString.substring(0, 2)) - 1;
    const updatedMs =
      1000 -
      parseInt(formattedMsString.substring(formattedMsString.length - 3));
    setSeconds(addLeadingZeros(updatedSeconds, 2));
    setMs(addLeadingZeros(updatedMs, 3));
  };

  const addLeadingZeros = (num, length) => {
    let zeros = '';
    for (let i = 0; i < length; i++) {
      zeros += '0';
    }
    return (zeros + num).slice(-length);
  };

  useEffect(() => {
    if (seconds <= -1) {
      history.push('/gameover');
    }
  }, [seconds, history]);

  return (
    <StyledGame>
      <StyledScore>
        Score:<Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter>
        <Accent>A</Accent>
      </StyledCharacter>
      <StyledTimer>
        Time:{' '}
        <Strong>
          {seconds}: {ms}
        </Strong>
      </StyledTimer>
    </StyledGame>
  );
};

export default Game;
