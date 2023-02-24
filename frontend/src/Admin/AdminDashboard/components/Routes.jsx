import React from 'react'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Analytics from '../pages/Analytics'
import Products from '../pages/Products'

const router = createBrowserRouter([
    { path: "/", element: <> <Dashboard /> </> },
    { path: "/customers", element: <> <Customers /> </> },
    { path: "/analytics", element: <> <Analytics /> </> },
    { path: "/Products", element: <> <Products /> </> }
])

function Routes() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Routes;
