import logo from './logo.svg';
import './App.css';
import Map from './Components/Map';
import Sidebar from './Components/Sidebar';
import NavBar from './Components/NavBar';
import { Routes, Route} from "react-router-dom";
import CreateSpot from './Components/CreateSpot';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <div className="App">
          <NavBar/>
          <div className='Map'>
            <Map></Map>
          </div>
          <div className='Sidebar'>
            <Sidebar></Sidebar>
          </div>
        </div>} />
      <Route path='create' element={
        <div className="App">
          <NavBar/>
          <CreateSpot></CreateSpot>
        </div>} />
    </Routes>
  );
}

export default App;
