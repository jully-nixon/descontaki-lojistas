import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import Register from './components/Register'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/register" exact={true} component={Register} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);
