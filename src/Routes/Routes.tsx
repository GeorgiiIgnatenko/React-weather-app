import React from "react";

import {Route, Switch} from 'react-router-dom';
import {HomePage} from '../views/HomePage';
import {DetailsPage} from "../views/DetailsPage";
import {SavedCitiesPage} from "../views/SavedCitiesPage";

export const Routes = () => (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/details-page' component={DetailsPage}/>
            <Route path='/saved-cities-page' component={SavedCitiesPage}/>
        </Switch>
    </div>
);