import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import ProductListPage from './pages/productListPage';
import CartPage from './pages/cartPage';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element = { < ProductListPage/>}/>
        <Route path='/ProductListing' element = { < ProductListPage />}/>
        <Route path='/cart' element = { < CartPage />}/>

      </Routes>
      
    </div>
    </Router>
  );
}

export default App;