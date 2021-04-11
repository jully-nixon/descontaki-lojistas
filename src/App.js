import React from 'react';
import './App.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

export default function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes />
      </BrowserRouter>
    </div>
  )
}
