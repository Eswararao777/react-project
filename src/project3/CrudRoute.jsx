import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Lay from './Lay'
import Create from './Create'
import Data from './Data'
import View from './View'
import Update from './Update'

const CrudRoute = () => {
  let r = createBrowserRouter([
    {
        path:"/",
        element:<Lay/>,
        children:[
            {
                index:true,
                element:<Create/>
            },
            {
                path:'/data',
                element:<Data/>
            },
            {
                path:'/view/:id',
                element:<View/>
            },
            {
                path:'/view',
                element:<View/>
            },
            {
                path:'/update',
                element:<Update/>
            },
            {
                path:'/update/:id',
                element:<Update/>
            }
        ]
    }
  ]) 
  return (
    <div>
        <RouterProvider router={r}/>
    </div>
  )
}

export default CrudRoute