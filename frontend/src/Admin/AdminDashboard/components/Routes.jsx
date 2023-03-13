import React from 'react'

// import { Route, Switch } from 'react-router-dom'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Analytics from '../pages/Analytics'
import Products from '../pages/Products'
import AddProducts from '../pages/AddProducts'

// const Routes = () => {
//     return (
//         <Switch>
//             <Route path='/' exact component={Dashboard} />
//             <Route path='/customers' component={Customers} />
//             <Route path='/analytics' component={Analytics} />
//             <Route path='/Products' component={Products} />
//             <Route path='/AddProducts' component={AddProducts} />

//         </Switch>
//     )
// }

const router = createBrowserRouter([
    { path: "/Dashboard", element: <> <Dashboard /></> },
    { path: "/Customers", element: <> <Customers /></> },
    { path: "/Analytics", element: <> <Analytics /></> },
    { path: "/Products", element: <> <Products /></> },
    { path: "/AddProducts", element: <> <AddProducts /></> }
])

export default router
