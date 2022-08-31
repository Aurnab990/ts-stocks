import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Details';
import Footer from './Footer';
import Addiems from './Home/Addiems';
import Home from './Home/Home';
import Navbar from './Home/Navbar';
import Product from './Home/Product';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Myitems from './Myitems';
import Notfound from './Notfound';
import Requireauth from './Requireauth';
import Update from './Update';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/additems' element={<Addiems></Addiems>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
        <Route path='/myitems' element={<Myitems></Myitems>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
        <Route path='/product' element={<Requireauth>
          <Details></Details>
        </Requireauth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
