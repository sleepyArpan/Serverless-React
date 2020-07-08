import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import HighScores from './pages/HighScores';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/game' component={Game} />
        <Route path='/highscores' component={HighScores} />
        <Route path='/gameover' component={GameOver} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
