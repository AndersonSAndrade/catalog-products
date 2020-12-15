import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Admin from './components/Admin';
import Catalog from './components/Catalog';

const Routes = () => (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
                <Route path="/catalog">
                    <Catalog/>
                </Route>
                <Route path="/admin">
                    <Admin/>
                </Route>
            </Switch>
        </BrowserRouter>
);

export default Routes;