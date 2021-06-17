import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import History from "./pages/history";

import 'bootstrap/dist/css/bootstrap.min.css';

const Root = (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={History} />
            </Switch>
        </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();