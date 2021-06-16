import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css';
import './mediaQuery.css';
import { AuthProvider } from './services/auth';


ReactDOM.render(
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
