import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        </div>

    );
}