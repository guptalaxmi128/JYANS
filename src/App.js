import { Routes, Route } from 'react-router-dom';
import "./index.css";
import Registration from "./Registration/Registration";
import Ticket from "./Ticket";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (<>
  
 
    <Routes>
      <Route path ="/" element={<Registration />} />
      <Route path ="/yogaticket" element={<Ticket />} />
    </Routes>
  </>
 
  );
}

export default App;
