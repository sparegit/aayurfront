import React from "react";
import { connect, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/userActions";
import { setCart } from "../actions/shopping_actions";
import { useState,useEffect } from "react";
import axios from "axios";

function Navbar({ logoutUser, setCart }) {
  const userIsLoggedIn = useSelector((state) => state.user.loggedIn);
  const[quantity,setQuantity]= useState(0);
  let user = useSelector((state) => state.user.user);

  const handleSubmit = () => {
    let email = user.email;
    logoutUser(email);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const resp=  axios.get(`http://localhost:8080/getquantity/cart/${localStorage.getItem('userId')}`).then(res=>{
      setQuantity(res.data)
      }).catch(err=>{
        console.log(err);
      })
    },);
    return () => clearInterval(interval);
  }, [])
  return (
    <nav
      //className="navbar navbar-light" style="background-color: #e3f2fd;"
      // style={{ alignItems: "center", }}
      className="navbar navbar-navbar-expand-xxl"
      //style={{backgroundColor:"lightseagreen"}}
      //style={{ backgroundColor: "lightyellow" }}
      //style={{backgroundColor:"HighlightText"}}
      style={{backgroundColor:"cornsilk"}}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link className="navbar-brand">
          <h2>AyurDaily.com</h2>
        </Link>
        <Link className="nav-link" to="/">
          <h3>Medicine</h3>
        </Link>
      </div>
      <div style={{ display: "flex" }}>
        <Link
          style={{ display: userIsLoggedIn ? "none" : "block" }}
          className="nav-link"
          to="/login"
        >
          <h4>Login</h4>
        </Link>
        <Link
          style={{ display: userIsLoggedIn ? "none" : "block" }}
          className="nav-link"
          to="/register"
        >
          <h4>Register</h4>
        </Link>
        <Link
          style={{ display: userIsLoggedIn ? "none" : "block" }}
          className="text"
        >
          <h4>{user && user.customerName}</h4>
        </Link>
        <Link
          onClick={handleSubmit}
          style={{ display: userIsLoggedIn ? "block" : "none" }}
          className="nav-link"
          to="/"
        >
          Logout
        </Link>
        <Link
          style={{ display: userIsLoggedIn ? "block" : "none" }}
          className="nav-link"
          to="/cart"
        >
         <i class="fas fa-shopping-cart">
                  <sup>
                    <span class="badge badge-success"style={{color:"black"}}>{quantity}</span>
                  </sup>
                </i>
        </Link>
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    loggedIn: state.user.loggedIn,
  };
};

export default connect(mapStateToProps, { logoutUser, setCart })(Navbar);
