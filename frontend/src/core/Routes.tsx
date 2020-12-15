import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Catalog from '../pages/Catalog';
import Navbar from './components/Navbar';

const Routes = () => (
        <BrowserRouter>
            <Navbar/>   
            <Switch>
                <Route exact path="/">
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