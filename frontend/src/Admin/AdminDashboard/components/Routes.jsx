import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Analytics from '../pages/Analytics'
import Products from '../pages/Products'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/analytics' component={Analytics}/>
            <Route path='/Products' component={Products}/>
        </Switch>
    )
}

export default Routes
