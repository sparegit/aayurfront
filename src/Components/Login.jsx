import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { loginUser } from "../actions/userActions";
const { useState } = React;

function Login({ user, loginUser }) {
  const history = useHistory();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    // loginUser(loginDetails);
    console.log(loginDetails)
    loginUser(loginDetails);
    history.push("/");
  };
  return (
    <div>
    <h1 style={{textAlign:"center",marginTop:"30px",fontWeight:"bold",fontSize:"40px"}}>Login</h1>
    <Card
      style={{
        width: "40rem",
        height: "300px",
        margin: "auto",
        marginTop: "10px",
        border: "1px solid",
      }}
    >
      <div className="mt-4" style={{ fontWeight: "bold", fontSize: "20px" }}>
        <form
          onSubmit={submitHandler}
          style={{ width: "480px", margin: "auto"}}
        >
          <div>
            <label for="emailId" className="form-label">
              Emailid
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="email"
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, email: e.target.value })
              }
              value={loginDetails.email} required
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
              value={loginDetails.password} minLength="5" required
             />
          </div>
          <div className="mt-2">
            <button className="btn btn-success button-small btn">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </Card>
    <br /><br /><br /><br />
    
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    loggedIn: state.user.loggedIn,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     loginUser: () => dispatch(loginUser())
//   }
// }

export default connect(mapStateToProps, { loginUser })(Login);
