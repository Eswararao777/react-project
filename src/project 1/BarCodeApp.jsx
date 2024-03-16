import axios from 'axios';
import React, { useEffect, useState } from 'react'

import style from "./barcodeapp.module.css"

const BarCodeApp = () => {
   let [barcode,setBarcode] = useState("");
   let [items,setItems] = useState([]);

   let  handleChange=(e)=>{
    setBarcode(e.target.value)
   }

   let getproduct = ()=>{
        if (barcode) {
            axios.get(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`).then((res)=>{
                console.log(res.data.product);
                if (res.data && res.data.product) {
                    setItems([res.data.product]);
                }
                else
                {
                   setItems(()=>{
                    console.log("data is not found");
                 })
                 
                }
            }).catch(()=>{
                console.log("data is not found");
            })
        }
   }
    
   return(
    <div>
        <h3>Enter barcode here:</h3>
        <input className={style.input} type="text" value={barcode} name='barcode' onChange={handleChange}/>
        <button className={style.button} onClick={getproduct}>check</button>

        {items.map((d)=>{
            return <div key={d._id}>
                <p>Name-{d.product_name}</p>
                <img src={d.image_url} alt="" />
                <p>Country of Origin-{d.countries_tags}</p>
                <p>Categories-{d.categories}</p>
                <p>Creator-{d.creator}</p>
            </div>
        })}
    </div>
   )
  
}

export default BarCodeApp