const React = require('react');
const ReactDOM = require('react-dom');
const { GoogleOAuthProvider } = require('@react-oauth/google');
const App = require('./App.js');
require('./index.css');

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(
    GoogleOAuthProvider,
    { clientId: "20339060285-jbne00ieud7j9gv5t1u2bl3msucb82cr.apps.googleusercontent.com" },
    React.createElement(App)
  ),
  document.getElementById('root')
);
