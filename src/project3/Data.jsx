import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './crud.module.css'

const Data = () => {
    let [state,setState] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/user").then((res)=>{
         setState(res.data.filter((data)=>data.name && data.email && data.phone && data.password))
         
        }).catch(()=>{
            console.log("data is not fetched");
        })
    },[])

   let deleteData=(id)=>{
      axios.delete("http://localhost:3000/user/"+id);
      setState(state.filter((ele)=>ele.id!=id));
   }
  return (
    <div className={style.container1}><br /><br />
        <Link className={style.addbut}  to='/'>Add</Link>
        {state.map((data)=>{
            return <div className={style.container2} key={data.id}>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.password}</p>
            <button className={style.deletebut} onClick={()=>deleteData(data.id)}>Delete</button>
            <Link className={style.viewbut} to={`/view/${data.id}`}>View</Link><br /><br />
         </div>
        })}
    </div>
  )
}

export default Data