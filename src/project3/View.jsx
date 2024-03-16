import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import style from './crud.module.css'

const View = () => {
 let [state,setState] = useState(null);
 let {id} = useParams();

 useEffect(()=>{
    axios.get("http://localhost:3000/user/"+id).then((res)=>{
       setState(res.data)
    }).catch(()=>{
        console.log("Loading...!");
    })
 },[id])
  return (
    <div><br /><br />
        {state==null?"northing":(<div className={style.container2} key={state.id}>
            <p>{state.name}</p>
            <p>{state.email}</p>
            <p>{state.phone}</p>
            <p>{state.password}</p><br />
            <Link className={style.editbut} to={`/update/${state.id}`}>Edit</Link>
            <Link className={style.backbut} to="/data">Back</Link>
        </div>)}
    </div>
  )
}

export default View