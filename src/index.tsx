import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

import './fonts/Montserrat-Bold.woff2'
import './fonts/Montserrat-Regular.woff2'
import './fonts/Montserrat-SemiBold.woff2'
import './fonts/Segoe-UI.ttf'

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
