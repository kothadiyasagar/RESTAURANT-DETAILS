import { RestaurantData } from "./RestaurantData"
import { useEffect, useState } from "react"
import {Form} from"./Form"
import "../re.css"

var sagar=[]
 const RestaurantDetails =(props)=>{
    let [upped,setUppend]=useState(props.data)
    let[FormData, setFormData]=useState([{}])
    const handaleChange = (e)=>{
      const inpuName=e.target.name
       setFormData({...FormData,[inpuName]:e.target.value,})
    }
    const handlesubmit =(e)=>{
      e.preventDefault();
       sagar.push(FormData)
       props=[...props.data,...sagar]
      setUppend(props)
    }
     const handel4 =(item)=>{
        const newItem = item.filter((item,index) => {
            return item.reting>=4;
        });
          newItem.sort((a, b) => b.reting - a.reting)
        console.log(newItem)
        
        setUppend(newItem)
     }
     const handel3 =(item)=>{
        const newItem = item.filter((item,index) => {
            return item.reting>=3;
        });
        newItem.sort((a, b) => b.reting - a.reting)
        console.log(newItem)
        setUppend(newItem)
     }
     const handel2 =(item)=>{
        const newItem = item.filter((item,index) => {
            return item.reting>=2;
        });
        newItem.sort((a, b) => b.reting - a.reting)
        console.log(newItem)
        setUppend(newItem)
     }
     const handel1 =(item)=>{
        const newItem1 = item.filter((item,index) => {
            return item.reting>=1;
        });
        newItem1.sort((a, b) => b.reting - a.reting)
        console.log(newItem1)
        setUppend(newItem1)
     }
     const card =(item)=>{
         const card=item.filter((item,index)=>{
             return item.payment_method.online=="true"||item.payment_method.card=="card"
         })
         console.log(card)
         setUppend(card)
     }
     const cash =(item)=>{
        const cash=item.filter((item,index)=>{
            return item.payment_method.cash=="true"||item.payment_method.cash=="cash"
        })
        console.log(cash)
        setUppend(cash)
    }
    const all =(item)=>{
        setUppend(item)
    }
     return(
     <>
     <div style={{display:"flex",justifyContent:"space-around"}}>
         <div>
         <button onClick={() =>handel4(props.data)}> 4 star above</button>
     <button onClick={() =>handel3(props.data)}>3 star above</button>
     <br></br>
     <button onClick={() =>handel2(props.data)}>2 star above</button>
     <button onClick={() =>handel1(props.data)}>1 star above</button>
         </div>
         <div>
             <button onClick={()=>card(props.data)}>Card Payment</button>
             <button onClick={()=>cash(props.data)}>Cash Payment</button>
             <button onClick={()=>all(props.data)}>All Payment</button>
         </div>
    
     </div>


       <div style={{display:"flex"}}>
           <div className="as" style={{marginLeft:"20px", marginTop:"20px",height:"500px",boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;"}}>            
       <form onSubmit={handlesubmit} style={{marginLeft:"20px",marginTop:"10px"}}>
         <div>
        <label>Name</label>
        <br></br>
         <input type="text"name="name" onChange={handaleChange}/>
         </div>
         <div>
        <label>ImgUrl</label>
        <br></br>
         <input type="url"name="img" onChange={handaleChange}/>
         </div>
         <div>
         <label>Rating</label>
         <br></br>
         <input type="number"name="reting" onChange={handaleChange}/>
         </div>
         <div>
         <label>payment_method</label>
         <br></br>
        <select name="payment_method" onChange={handaleChange}>
          <option value="cash">cash</option>
          <option  value="card">card</option>
          <option  value="all">all</option>
        </select>
        <div>
          <label>reviwes</label>
          <br></br>
          <input type="number" name="reviews" onChange={handaleChange}/>
        </div>
        <div>
          <label>categories</label>
          <input type="text" name="categories" onChange={handaleChange}/>
        </div>
        <div>
          <label>total_votes</label>
          <br></br>
          <input type="text" name="total_votes" onChange={handaleChange}/>
        </div>
        <div>
          <label>cost_for_one</label>
          <br></br>
          <input type="number" name="cost_for_two" onChange={handaleChange}/>
        </div>
        <input type="Submit" name="Submit"/>
         </div>
       </form>
           </div>
       <div className="main">
             {upped.map((item)=>{
                 return(<RestaurantData key={item.id} item={item}/>)
             })}
         </div>
       </div>
       
         </>
     )
 }



export default RestaurantDetails
