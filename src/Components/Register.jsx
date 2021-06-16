import axios from "axios";
import React from "react";
import {Link,useHistory} from 'react-router-dom'
import {Card } from 'react-bootstrap'
import {connect} from 'react-redux'
import {registerUser,logoutUser, loginUser} from '../actions/userActions'
const { useState } = React;
function Register({registerUser, loginUser}) {
  const history = useHistory();
  const [user, setUser] = useState({
    customerName: "",
    mobileNumber: "",
    email: "",
    customerPassword: ""
  });
  
  const  submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    registerUser(user);
    history.push("/login")
 
    
  };
  // const postCustomer = async(user)=>{
  //   const res= await axios.post("http://localhost:8080/customer",user)
  //   console.log(res);
  //   if(res.status===200){
  //   history.push('/');
  //   }
  // }

  return (
    <div>
      <div style={{textAlign:"center",marginTop:"20px"}}>
        <h1 style={{fontWeight:"bold"}}>Register Here..</h1>
      </div>
    <Card style={{width:"50rem",height:"400px", margin:"auto",marginTop:"20px",border:"1px solid"}}>
    <div className="mt-5 " style={{fontWeight:"bold",fontSize:"20px",marginTop:"5px"}}>
      <form onSubmit={submitHandler} style={{ width: "480px", margin: "auto" }}>
        <div>
          <div>
          <label className="mt-2 mb-2" for="firstname" class="form-label">
            {" "}
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="name"
            onChange={(e) => setUser({ ...user, customerName: e.target.value })}
            value={user.customerName} required
          />
          </div>
        
        <div style={{marginTop:"5px"}}>
          <label className="mt-2 mb-2" for="mobilenumber" class="form-label">
            {" "}
            Mobile number
          </label>
          <input
            type="text"
            class="form-control"
            id="mobilenumber"
            placeholder="mobile"
            onChange={(e) => setUser({ ...user, mobileNumber: e.target.value })}
            value={user.mobileNumber} required 
          />
          </div>
          <div style={{marginTop:"5px"}}>
          <label className="mt-2 mb-2" for="emailid" className="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="emailid"
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email} required
          />
          </div>
        </div>
        <div class="mb-3 mt-2">
          <label for="password" class="form-label">
            {" "}
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="password"
            onChange={(e) => setUser({ ...user, customerPassword: e.target.value })}
            value={user.customerPassword} required
          />
        </div>
        <div className="mt-2">
          <button className="btn btn-success button-small btn">Register</button>
        </div>
      </form>
    </div>
    </Card>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    user: state.user.user,
    loggedIn: state.user.loggedIn
  }
}


export default connect(mapStateToProps,{registerUser,loginUser}) (Register);