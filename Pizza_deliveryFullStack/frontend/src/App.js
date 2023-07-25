import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import SignUp from './Pages/SignUp';
import Navbar from './components/Navbar';
import Cart from './Pages/Cart';
import CustomPizza from './Pages/CustomPizza';
import Success from './Pages/Sucess.js';
import History from './Pages/History';
import NewUser from './Pages/Admin/NewUser';
import OurPizzas from './Pages/Admin/OurPizzas';
import Orders from './Pages/Admin/Orders';
import { useSelector } from 'react-redux';

function App() {
  const userState = useSelector(state => state.loginUserReducer)
  const { currentUser } = userState;
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/custom-pizza' element={<CustomPizza />} />
          <Route path='/paymentsuccess' element={<Success />} />
          <Route path='/history' element={<History />} />
          <Route path='/admin/new-users' element={currentUser && currentUser.isAdmin ? <NewUser /> : <Home />} />
          <Route path='/admin/pizzas' element={currentUser && currentUser.isAdmin ? <OurPizzas /> : <Home />} />
          <Route path='/admin/orders' element={currentUser && currentUser.isAdmin ? <Orders /> : <Home />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
