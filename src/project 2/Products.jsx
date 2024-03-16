import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './project.module.css'

const Products = () => {
    let [state,setState] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setState(res.data)
        }).catch(()=>{
            console.log("Loading...");
        })
    },[])
  return (
    <div className={style.data}>
        {state.map((data)=>{
            return <div className={style.data1} key={data.id}>
               <p>{data.title}</p>
               <img src={data.image} alt="" />
               <p>{data.price}</p>
               <p>{data.category}</p>
               <Link id={style.link} to={`/cart/${data.id}`}>Go To Cart</Link>
            </div>
        })}
    </div>
  )
}

export default Products