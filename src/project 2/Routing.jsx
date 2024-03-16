import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import LayOut from './LayOut'
import Products from './Products'
import Cart from './Cart'
import Order from './Order'
import CheckOut from './CheckOut'
const Routing = () => {
    let rout = createBrowserRouter([
        {
            path:"/",
            element:<LayOut/>,
            children:[
                {
                    index:true,
                    element:<Products/>
                },
                {
                    path:"/cart/:id",
                    element:<Cart/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                },
                {
                    path:"/order/:id",
                    element:<Order/>
                },
                {
                    path:"/order",
                    element:<Order/>
                },
                {
                    path:"/checkout",
                    element:<CheckOut/>
                }
            ]
        }
    ])
  return (
    <div>
        <RouterProvider router={rout}></RouterProvider>
    </div>
  )
}

export default Routing