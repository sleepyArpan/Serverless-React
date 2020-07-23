import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ScoreProvider } from './context/ScoreContext';
import { Auth0Provider } from '@auth0/auth0-react';

import config from './auth_config.json';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={config.domain}
      clientId={config.client}
      redirectUri={window.location.origin}
      audience={config.audience}>
      <ScoreProvider>
        <App />
      </ScoreProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
