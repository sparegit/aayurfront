import React from "react";
import axios from 'axios'
import { connect } from "react-redux";
import {  useHistory } from "react-router";
import { loginUser } from "../actions/userActions";
const { useState } = React;

function Login({user,loginUser}) {
const history= useHistory();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async(e) => {
    e.preventDefault();
    // loginUser(loginDetails);
 loginUser(loginDetails)
 history.push("/");

  };
  return (
    <div className="mt-5 ">
      <form onSubmit={submitHandler} style={{ width: "480px", margin: "auto" }}>
        <div>
          <label for="emailId" className="sr-only">
            emailid
          </label>
          <input
            type="username"
            class="form-control"
            id="email"
            placeholder="email"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, email: e.target.value })
            }
            value={loginDetails.email}
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
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
            value={loginDetails.password}
          />
        </div>
        <div className="mt-2">
          <button className="btn btn-primary button-small btn">sign in</button>
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

// const mapDispatchToProps = dispatch => {
//   return {
//     loginUser: () => dispatch(loginUser())
//   }
// }

export default connect(
  mapStateToProps,
  {loginUser},
) (Login)
