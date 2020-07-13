import React, { useState, useEffect, useCallback } from 'react';
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharacter,
} from '../styled/Game';
import { Strong, Accent } from '../styled/Random';
import { useScore } from '../context/ScoreContext';

const Game = ({ history }) => {
  const MAX_SECONDS = 5;
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const [currentCharacter, setCurrentCharacter] = useState('');
  const [score, setScore] = useScore();
  const [ms, setMs] = useState(0);
  const [seconds, setSeconds] = useState(MAX_SECONDS);

  // Starts the timer and the game
  useEffect(() => {
    setRandomCharacter();
    setScore(0);
    const currentTime = new Date();
    const interval = setInterval(() => updateTime(currentTime), 1);
    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, []);

  // Ends the game
  useEffect(() => {
    if (seconds <= -1) {
      /**
       * TODO: Save the highscore to a database
       * !!: Do not forget
       */
      history.push('/gameover');
    }
  }, [seconds, history]);

  // Listens to the the keystrokes and updates the score accordingly
  const keyUpHandler = useCallback(
    (e) => {
      console.log(e.key);
      if (e.key === currentCharacter) {
        setScore((prevScore) => prevScore + 1);
      } else {
        if (score > 0) {
          setScore((prevScore) => prevScore - 1);
        }
      }
      setRandomCharacter();
    },
    [currentCharacter, score, setScore]
  );

  // Sets up the event listeners for the keys
  useEffect(() => {
    document.addEventListener('keyup', keyUpHandler);
    return () => {
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, [keyUpHandler]);

  // Picks a random character from the string above [characters]
  const setRandomCharacter = () => {
    const random = Math.floor(Math.random() * 36);
    setCurrentCharacter(characters[random]);
  };

  // Updates the time (timer)
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

  // Formats the time accordingly (Adds 'length amount of leading zeroes')
  const addLeadingZeros = (num, length) => {
    let zeros = '';
    for (let i = 0; i < length; i++) {
      zeros += '0';
    }
    return (zeros + num).slice(-length);
  };

  return (
    <StyledGame>
      <StyledScore>
        Score:<Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter>
        <Accent>{currentCharacter}</Accent>
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
