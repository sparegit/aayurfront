import React from 'react'
import{Link} from 'react-router-dom'
function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className= "container">
  <a class="navbar-brand" href="#">React</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" exact to="/">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" exact to="/about">About</Link>
      </li>
      <li class ="nav item">
          <Link class ="nav-link" exact to="/user">User</Link>
          </li>
    </ul>
    </div>
  </div>
</nav>

    )
};
export default Navbar