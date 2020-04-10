import React from "react";

import {Route, Switch,HashRouter as Router} from 'react-router-dom';

import {HomePage} from '../pages/HomePage';
import {DetailsPage} from "../pages/DetailsPage";

import HeaderBarContainer from "../containers/HeaderBar";

export const MainRouter = () => (
    <Router>
        <div className='app dark'>
            <HeaderBarContainer/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/details-page' component={DetailsPage}/>
            </Switch>
        </div>
    </Router>
);