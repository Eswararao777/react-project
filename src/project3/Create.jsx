import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './crud.module.css'

const Create = () => {
  let [state,setState] = useState({
    name:'',
    email:'',
    phone:'',
    password:''
  })
  let {name,email,phone,password} = state

  let navigate = useNavigate();

  let handleChane=(e)=>{
    let {name,value} = e.target;
    setState({...state,[name]:value}) 
  }

  let handleSubmit=(e)=>{
    e.preventDefault();
    if(name && email && phone && password){
    axios.post("http://localhost:3000/user",state).then((res)=>{
     console.log(res);
     navigate("/data");
    }).catch(()=>{
        console.log("data is not posted");
    })
   }else{
     setState();
   }
  }
  return (
    <div className={style.container}>
        <form action="" className={style.form} onSubmit={handleSubmit}>
            <input type="text" name="name" value={name}   onChange={handleChane} placeholder='enter your name'/><br /><br />
            <input type="text" name="email" value={email} onChange={handleChane} placeholder='enter your  email'/><br /><br />
            <input type="text" name="phone" value={phone} onChange={handleChane} placeholder='enter your phone number'/><br /><br />
            <input type="text" name="password" value={password} onChange={handleChane} placeholder='enter your password'/><br /><br />
            <button className={style.submitbut}>submit</button>
        </form>
    </div>
  )
}

export default Create 