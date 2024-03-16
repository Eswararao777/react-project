import React, { useState } from 'react'
import style  from './project.module.css';

const CheckOut = () => {
   let [state,setState] = useState({
      name:"",
      email: "",
      phoneNumber: "",
      address: ""
   })
    
   let {name,email,phoneNumber,address} = state
    
   const handleInputChange = (e) =>{

    setState({...state,[e.target.name]: e.target.value})
    
   }


  return (
    <div className={style.container1}><br />
       <form action="" onSubmit={ (e)=>{e.preventDefault(); alert("Your order has been placed!")}}>
         <input type="text" name="name"  value={name} placeholder='Enter your name' onChange={handleInputChange}/><br /><br />
         <input type="email" name="email" value={email} placeholder='Enter your email' onChange={handleInputChange}/><br /><br />
         <input type="text" name="phoneNumber"  value={phoneNumber} placeholder='Enter your phone number' onChange={handleInputChange}/><br /><br />
         <textarea name="address" value={address} id="" cols="30" rows="10" placeholder='Enetr your address' onChange={handleInputChange}></textarea><br />
         <input className={style.submit} type="submit" name="" id="" />
       </form>
       
      {/* <h1>Order placed successful and Thank you for booking...!</h1> */}
    </div>
  )
}

export default CheckOut