import React,{useState,useEffect} from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/userActions";
import {setCart} from "../actions/shopping_actions"
import axios from "axios";

function Navbar({ logoutUser,setCart }) {

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
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <nav
      style={{ alignItems: "center" }}
      className="navbar navbar-navbar-expand-xxl navbar-light bg-light"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link className="navbar-brand">
          <h2>Ayurveda</h2>
        </Link>
        <Link className="nav-link" to="/">
          <h3>Home</h3>
        </Link>
        <form className="form-inline my-2 my-lg-0 ">
          <div className="container-md d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div style={{ display: "flex" }}>
        <Link
          style={{ display: userIsLoggedIn ? "none" : "block" }}
          className="nav-link"
          to="/login"
        >
          <h4>login</h4>
        </Link>
        <Link
          style={{ display: userIsLoggedIn ? "none" : "block" }}
          className="nav-link"
          to="/register"
        >
          <h4>register</h4>
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
          logout
        </Link>
        <Link
          style={{ display: userIsLoggedIn ? "block" : "none" }}
          className="nav-link"
          to="/cart"
        >
          cart{quantity}
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

export default connect(mapStateToProps, { logoutUser,setCart })(Navbar);
