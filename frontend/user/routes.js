import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import registerU from './app/registerU';



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/registerU/' component={registerU}/>


            </Switch>
        </BrowserRouter>
    )
}