import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx'; // No es necesario usar .default

import './index.css'; // Importa directamente el archivo CSS

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  React.createElement(GoogleOAuthProvider, { clientId: "20339060285-jbne00ieud7j9gv5t1u2bl3msucb82cr.apps.googleusercontent.com" },
    React.createElement(App, null)
  )
);
