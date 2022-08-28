import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Home from './Home/Home';
import Navbar from './Home/Navbar';
import Product from './Home/Product';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Requireauth from './Requireauth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product' element={<Requireauth>
          <Product></Product>
        </Requireauth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
