import axios from "axios";
import React from "react";
import {Link,useHistory} from 'react-router-dom'
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
    <div className="mt-5 ">
      <form onSubmit={submitHandler} style={{ width: "480px", margin: "auto" }}>
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
            value={user.customerName}
          />
        
          <label className="mt-2 mb-2" for="mobilenumber" class="form-label">
            {" "}
            Mobile number
          </label>
          <input
            type="text"
            class="form-control"
            id="mobilenumber"
            placeholder="Mobile"
            onChange={(e) => setUser({ ...user, mobileNumber: e.target.value })}
            value={user.mobileNumber}
          />
          <label for="emailid" className="sr-only">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="emailid"
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
          />
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
            value={user.customerPassword}
          />
        </div>
        <div className="mt-2">
          <button className="btn btn-primary button-small btn">register</button>
        </div>
      </form>
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
