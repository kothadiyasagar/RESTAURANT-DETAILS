import "../re.css"
import "../componet/Form"

const RestaurantData =(props)=>{
    console.log(props.item)
  return (
      <>
      <div className="fexdiv">
      <img className="img1" src={props.item.img}></img>
      <div>
      <h3>{props.item.name}</h3> 
      <p>{props.item.categories}</p>
      <p>Cost ₹{props.item.cost_for_two} for one</p>
      {/* <h6>Accepts{props.item.payment_methods.cash}{props.item.payment_methods.online}</h6> */}
      <p style={{color:"black"}}>Accepts online payments only </p>
      </div>
     <div>
         
     </div>
        <div className="a">
            <p className="reating">{props.item.reting}</p>
        
         <p>{props.item.total_votes} votes</p>
         <p>{props.item.reviews} reviews</p>
        </div>
  </div>
      
     
      </>
  )
}

export  {RestaurantData}