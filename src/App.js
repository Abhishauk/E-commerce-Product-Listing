import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ProductListing from './components/productListing';
import Cart from './components/cart';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element = { < Navbar />}/>
        <Route path='/ProductListing' element = { < ProductListing />}/>
        <Route path='/cart' element = { < Cart />}/>

      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
