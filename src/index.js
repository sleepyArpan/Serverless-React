import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ScoreProvider } from './context/ScoreContext';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='typing-game.au.auth0.com'
      clientId='36nhaJGa2mTEr9bd143zfJHm47A2aKAd'
      redirectUri={window.location.origin}>
      <ScoreProvider>
        <App />
      </ScoreProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
