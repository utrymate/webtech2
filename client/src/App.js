import React from 'react';
import './App.css';
import ProductStore from './ProductStore'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {PrivateRoute} from "./components/PrivateRoute";
import MainLogin from "./MainLogin";

function App() {

    return (
        <BrowserRouter>
            <Switch >
                <Route exact path='/' component={MainLogin}/>
                <Route exact path='/login' component={MainLogin}/>
                <PrivateRoute exact path='/app' component={ProductStore}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;