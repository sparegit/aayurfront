
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import store from './redux/store';
import {loadUser} from './actions/userActions'
import {useEffect} from 'react'
let email
if(localStorage.getItem('email')){
  email=localStorage.getItem('email')
  console.log(email)
}
function App() {
  useEffect(() => {
    // store.dispatch(loadUser(email))
    
  }, [])
  return (
    <>
    <Router>
      <Navbar/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      {/* <AuthRoute exact path='/login' component={Login}/>
      <AuthRoute exact path='/register' component={Register}/> */}
      </Router>
   </>
  );
}

export default App;
