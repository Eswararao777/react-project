import React from 'react'
import NavBarForCurdRoute from './NavBarForCurdRoute'
import { Outlet } from 'react-router-dom'

const Lay = () => {
  return (
    <div>
        <NavBarForCurdRoute/>
        <Outlet/>
    </div>
  )
}

export default Lay