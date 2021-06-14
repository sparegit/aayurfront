import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/userActions";

function Navbar({ logoutUser }) {
  const userIsLoggedIn = useSelector((state) => state.user.loggedIn);
  let user = useSelector((state) => state.user.user);

  const handleSubmit = () => {
    let email = user.email;
    logoutUser(email);
  };

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
          cart
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

export default connect(mapStateToProps, { logoutUser })(Navbar);
