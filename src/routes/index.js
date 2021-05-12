import React from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import CheckCoupons from '../pages/CheckCoupons';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/home" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/check-coupons" component={CheckCoupons} />
                </Switch>
            </BrowserRouter>
        </div>

    );
}
export default Routes;