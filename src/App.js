import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Customer from './components/customer';
import AddCustomer from './components/addcustomer';
import ViewCustomer from './components/viewcustomer';
import UpdateCustomer from './components/updatecustomer';
import Counter from './components/counter';


function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route path ="/counter" component={Counter}/>
        <Route exact path="/"component={Customer}/>
        <Route exact path="/customers"component={Customer}/>
       <Route exact path ="/add-customer" component ={AddCustomer}></Route>
       <Route exact path ="/view-customers/:customerId" component={ViewCustomer}></Route>
       <Route exact path = "/update-customers/:customerId" component ={UpdateCustomer}></Route>
        </Switch>
    </div>
    </Router>

  );
}

export default App;
