import React from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import CheckCoupons from '../pages/CheckCoupons';
import Reports from '../pages/Reports';
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
                    <Route path="/reports" component={Reports} />
                </Switch>
            </BrowserRouter>
        </div>

    );
}
export default Routes;