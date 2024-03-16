import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import style from './project.module.css'

const Cart = () => {
    let [state,setState] = useState(null)
    let {id} = useParams()

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            setState(res.data)
        }).catch(()=>{
            console.log("Loading...");
        })
    })

  return (
    <div  className={style.container}>
        {state==null?"nothing":(<div key={state.id}>
            <p>{state.title}</p>
            <p>{state.price}</p>
            <img src={state.image} alt="" />
            <p>{state.category}</p><br />

            <Link className={style.gotoback} to="/">Go To Back</Link>
            <Link className={style.gotoorder} to={`/order/${id}`}>Go To Order</Link>
        </div>)}
    </div>
  )
}

export default Cart