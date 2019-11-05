import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import {Switch, Route} from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route  path={`/add/:id`} component={Form}/>
        <Route  path='/add' component={Form}/>
    </Switch>
)