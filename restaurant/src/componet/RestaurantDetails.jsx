import { RestaurantData } from "./RestaurantData"
import { useState } from "react"
import "../re.css"



 const RestaurantDetails =(props)=>{
    console.log(props.data)
    const[data,setData]=useState(props.data)
     return(
         <>
         <div className="main">
             {data.map((item)=>{
                 return(<RestaurantData key={item.id} item={item}/>)
             })}
         </div>
         </>
     )
 }



export default RestaurantDetails
