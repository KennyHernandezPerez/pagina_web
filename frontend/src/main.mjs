import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx'; 
import './index.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <GoogleOAuthProvider clientId="20339060285-jbne00ieud7j9gv5t1u2bl3msucb82cr.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
