import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Nav from './components/Nav';
import  {CartProvider}  from './context/Productcontext'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Shop />} >Shop</Route>
            <Route path='/cart' element={<Cart />} >Cart</Route>
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
