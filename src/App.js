import "./App.scss";
import Countdown from "./components/countdown/Countdown";
import Product from "./components/product/Product";
import {useState} from 'react'



function App() {

  const [showCountdown, setShowCountdown] = useState(true)

  return (
    <div>
      {showCountdown && <Countdown onHideCountdown={()=> setShowCountdown(false)}/>}
      
      <Product />
    </div>
  );
}

export default App;
