import logo from './logo.svg';
import './App.css';
import Map from './Components/Map';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='Map'>
        <Map></Map>
      </div>
      <div className='Sidebar'>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
