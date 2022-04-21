import LoginComponent from 'components/login/LoginComponent';
import SingUpComponent from 'components/login/SingUpComponent';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PATHS from 'resources/paths';

function PublicRoutes() {
    return (
        <Switch>
            <Route path={PATHS.login} component ={LoginComponent} />
            <Route path={PATHS.signup} render={() => <SingUpComponent/>} />
            <Route path={PATHS.forgotPassword} render={() => <div>forgotPassword</div>} />
            <Redirect to={PATHS.login} />
        </Switch>
    );
}

export default PublicRoutes;
