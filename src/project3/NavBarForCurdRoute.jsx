import React from 'react'
import style from './crud.module.css'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

const NavBarForCurdRoute = () => {
  return (
    <div className={style.nav}>
        <article className={style.left}>
        <FaCartShopping />
        </article>
        <article className={style.right}>
            <NavLink className={style.navlink} to='/'>Create</NavLink>
            <NavLink className={style.navlink} to='/data'>Data</NavLink>
            <NavLink className={style.navlink} to='/view'>View</NavLink>
            <NavLink className={style.navlink} to='update'>Update</NavLink>
        </article>
    </div>
  )
}

export default NavBarForCurdRoute