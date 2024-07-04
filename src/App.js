import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ProductListing from './components/productListing';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element = { < Navbar />}/>
        <Route path='/ProductListing' element = { < ProductListing />}/>

      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
