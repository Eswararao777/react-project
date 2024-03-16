import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './crud.module.css'


const Update = () => {
    let [state,setState] = useState({
        name:'',
        email:'',
        phone:'',
        password:''
    })

    let {name,email,phone,password} = state
    let navigator = useNavigate();
    let {id} = useParams()
    useEffect(()=>{
       axios.get("http://localhost:3000/user/"+id).then((res)=>{
         setState(res.data)
       })
    },[])

    let handleSubmit=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3000/user/"+id,state).then((res)=>{
           console.log(res.data);
           navigator("/data")
        }).catch(()=>{
            console.log("data not updated");
        })
    }

   let handleChane=(e)=>{
      let {name,value} = e.target;
      setState({...state,[name]:value})
   }
  return (
    <div  className={style.container}>
        <form action="" onSubmit={handleSubmit} className={style.form}>
            <input type="text" name="name" value={name}   onChange={handleChane} placeholder='enter your name'/><br /><br />
            <input type="text" name="email" value={email} onChange={handleChane} placeholder='enter your  email'/><br /><br />
            <input type="text" name="phone" value={phone} onChange={handleChane} placeholder='enter your phone number'/><br /><br />
            <input type="text" name="password" value={password} onChange={handleChane} placeholder='enter your password'/><br /><br />
            <button className={style.submitbut}>submit</button>
        </form>
    </div>
  )
}

export default Update