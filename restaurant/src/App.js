import logo from './logo.svg';
import './App.css';
import data from './data.json'
import RestaurantDetails from './componet/RestaurantDetails'

function App() {
  // console.log(data)
  return (
      <div>
        < RestaurantDetails data={data}/>
      </div>
    

  );
}

export default App;
