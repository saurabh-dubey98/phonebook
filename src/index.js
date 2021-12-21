import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from './context/AuthContext';
import UserDataProvider from './context/UserDataContext';

ReactDOM.render(
  <Router>
    <AuthProvider>
      <UserDataProvider>
        <App />
      </UserDataProvider>
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);
