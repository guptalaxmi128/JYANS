import { Routes, Route } from 'react-router-dom';
import "./index.css";
import Registration from "./Registration/Registration";
import Ticket from "./Ticket";
import 'bootstrap/dist/css/bootstrap.min.css';
import Entrance from './Entrance';
import FoodCourt from './FoodCourt';
import Certificate from './Certificate';

function App() {
  return (<>
  
 
    <Routes>
      <Route path ="/" element={<Registration />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path ="/yogaticket" element={<Ticket />} />
      <Route path='/entrance' element={<Entrance />} />
      <Route path="/foodcourt" element={<FoodCourt />} />
      
    </Routes>
  </>
 
  );
}

export default App;
