import React from 'react';
import {App} from './views/App'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {createStore,compose,applyMiddleware} from "redux";
import {rootReducer} from './redux/rootReducer';
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {HashRouter as Router} from 'react-router-dom';

import './index.scss';

import './fonts/Montserrat-Bold.woff2';
import './fonts/Montserrat-Regular.woff2';
import './fonts/Montserrat-SemiBold.woff2';
import './fonts/Segoe-UI.ttf';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
