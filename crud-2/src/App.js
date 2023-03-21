
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductList from './Products/ProductList';
import CreateProduct from './Products/CreateProduct';


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/create" element={<CreateProduct/>}/>
      </Routes>
      </Router>

    </div>
   
  );
}

export default App;
