import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import style from './project.module.css'

const Order = () => {
    let [state,setState] = useState(null)
    let {id} = useParams()
    let [count,setCount] = useState(1)
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            setState(res.data)
        }).catch(()=>{
            console.log("Loading...");
        })
    },[])
   
    let additems =()=>{
        setCount(count+1)
    }

    let subitems=()=>{
        
        if (count<=1){

        }
        else
        {
            setCount(count-1)
        }
    }

    let totalprice=()=>{
        return count*state.price
    }
  return (
    <div  className={style.container}>
        {state==null?"nothing":(<div key={state.id}>
            <p>{state.title}</p>
            <p>{state.price}</p>
            <img src={state.image} alt="" />
            <p>{state.category}</p><br />
            
             
            <button onClick={subitems} >-</button> 
            {count} 
            <button onClick={additems}>+</button> <br /><br />
            <p>Total price:-{totalprice()}</p><br />

            <Link className={style.gotocheckout} to="/checkout">Go To Checkout</Link> 

        </div>)}

    </div>
  )
}

export default Order