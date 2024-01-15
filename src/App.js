import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home';
import Cart from './Cart';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
