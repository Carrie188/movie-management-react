import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PATHS from 'resources/paths';
import LoadingComponent from 'components/loading';
import MoviesOverView from 'components/content/movies/MoviesOverView';
import UsersList from 'components/content/users/UsersList';



const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={PATHS.dashboard} component={DashboardComponent} />
                <Route exact path={PATHS.overviewTwo} render={() => <div>overviewTwo</div>} />
                <Route exact path={PATHS.overviewThree} render={() => <div>overviewThree</div>} />
                <Route exact path={PATHS.overview} render={() => <MoviesOverView/>} />
                <Route exact path={PATHS.tickets} render={() => <div>tickets</div>} />
                <Route exact path={PATHS.ideasTwo} render={() => <div>ideasTwo</div>} />
                <Route exact path={PATHS.ideasThree} render={() => <div>ideasThree</div>} />
                <Route exact path={PATHS.ideas} render={() => <div>ideas</div>} />
                <Route exact path={PATHS.users} render={() => <UsersList/>} />
                <Route exact path={PATHS.agents} render={() => <div>agents</div>} />
                <Route exact path={PATHS.articles} render={() => <div>articles</div>} />
                <Route exact path={PATHS.settings} render={() => <div>settings</div>} />
                <Route exact path={PATHS.subscription} render={() => <div>subscription</div>} />
                <Redirect to={PATHS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
