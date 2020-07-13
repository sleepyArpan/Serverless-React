import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ScoreProvider } from './context/ScoreContext';

ReactDOM.render(
  <React.StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
