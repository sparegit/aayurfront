
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import Order from './Components/Order'
import store from './redux/store';
import {loadUser} from './actions/userActions'
import {useEffect} from 'react'
import Cart from './Components/Cart';
import SingleMed from './Components/SingleMed';
import OrderDetail from './Components/OrderDetail';
let email
if(localStorage.getItem('email')){
  email=localStorage.getItem('email')
  console.log(email)
}
function App() {
  useEffect(() => {
     store.dispatch(loadUser(email))
    
  }, [])
  return (
    <>
    <Router>
      <Navbar/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/order' component={Order}/>
      <Route exact path='/cart' component={Cart}/>
      <Route exact path='/orderdetails' component={OrderDetail}/>
      <Route exact path='/medicine/:medicineId' component={SingleMed}/>
      {/* <AuthRoute exact path='/login' component={Login}/>
      <AuthRoute exact path='/register' component={Register}/> */}
      </Router>
   </>
  );
}

export default App;
