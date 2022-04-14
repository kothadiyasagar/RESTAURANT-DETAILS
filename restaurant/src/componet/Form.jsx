// import { RestaurantData } from "./RestaurantData"
// import { useState } from 'react';
//  function Form(data,setData) {
//     let[FormData, setFormData]=useState({})
//   const handaleChange = (e)=>{
//     const inpuName=e.target.name
//      setFormData({...FormData,[inpuName]:e.target.value,})
//   }
//   const handlesubmit =(e)=>{
//     e.preventDefault();
//     console.log(FormData)
//      setData(...data,FormData)
//   }
 
   

   
//     return (
//       <>
//        <form onSubmit={handlesubmit}>
//          <div>
//         <label>Name</label>
//          <input type="text"name="name" onChange={handaleChange}/>
//          </div>
//          <div>
//         <label>ImgUrl</label>
//          <input type="url"name="img" onChange={handaleChange}/>
//          </div>
//          <div>
//          <label>Rating</label>
//          <input type="number"name="reting" onChange={handaleChange}/>
//          </div>
//          <div>
//          <label>payment_method</label>
//         <select name="payment_method" onChange={handaleChange}>
//           <option value="cash">cash</option>
//           <option  value="card">card</option>
//           <option  value="all">all</option>
//         </select>
//         <div>
//           <label>reviwes</label>
//           <input type="number" name="reviews" onChange={handaleChange}/>
//         </div>
//         <div>
//           <label>categories</label>
//           <input type="text" name="categories" onChange={handaleChange}/>
//         </div>
//         <div>
//           <label>total_votes</label>
//           <input type="text" name="total_votes" onChange={handaleChange}/>
//         </div>
//         <div>
//           <label>cost_for_one</label>
//           <input type="number" name="cost_for_two" onChange={handaleChange}/>
//         </div>
//         <input type="Submit" name="Submit"/>
//          </div>
        

//        </form>
//        <
    
//     );
//   }
//   export {Form} 