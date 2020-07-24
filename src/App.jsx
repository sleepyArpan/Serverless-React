import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useAuth0 } from '@auth0/auth0-react';

import Container from './styled/Container';
import Main from './styled/Main';
import Global from './styled/Global';
import Loader from './styled/Loader';

import { darkTheme, lightTheme } from './styled/Themes';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import HighScores from './pages/HighScores';
import Navbar from './components/Navbar';

function App() {
  const { isLoading } = useAuth0();
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');
    setTheme(localStorageTheme || 'dark');
  }, []);

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <Router>
        <ThemeProvider theme={currentTheme}>
          <Global />
          <Main>
            {isLoading ? (
              <Loader>Loading...</Loader>
            ) : (
              <Container>
                <Navbar toggleTheme={toggleTheme} />
                <Switch>
                  <Route path='/game' component={Game} />
                  <Route path='/highscores' component={HighScores} />
                  <Route path='/gameover' component={GameOver} />
                  <Route path='/' component={Home} />
                </Switch>
              </Container>
            )}
          </Main>
        </ThemeProvider>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
