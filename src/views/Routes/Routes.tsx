import React from "react";

import {Route, Switch} from 'react-router-dom';
import {HomePage} from '../HomePage';
import {DetailsPage} from "../DetailsPage";
import {SavedCitiesPage} from "../SavedCitiesPage";

export const Routes = () => (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/details-page' component={DetailsPage}/>
            <Route path='/saved-cities-page' component={SavedCitiesPage}/>
        </Switch>
    </div>
);