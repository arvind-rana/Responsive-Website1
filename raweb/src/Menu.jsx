import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return(
        <>
        <div className='container-fluid nav_bg'>
        <div className='row'>
        <div className='col-10 mx-auto'>
  <nav  ClassName="navbar navbar-expand-lg navbar-light bg-light">
  <div  ClassName="container-fluid">
    <NavLink ClassName="navbar-brand" to="/">Navbar</NavLink>
   
    <div  ClassName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  ClassName="navbar-nav ml-auto mb-2 mb-lg-0">
        <li  ClassName="nav-item">
          <NavLink activeClassName='menu_active' ClassName="navlink" aria-current="page" to="/">Home</NavLink>
        </li>
        <li  ClassName="nav-item">
          <NavLink activeClassName='menu_active' ClassName="navlink" to="/about">About</NavLink>
        </li>
        <li  ClassName="nav-item">
          <NavLink activeClassName='menu_active' ClassName="navlink" to="/contact">Contact</NavLink>
        </li>
        <li  ClassName="nav-item">
          <NavLink activeClassName='menu_active'  ClassName="navlink" to="/service">Service</NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
</div>

        </div>

        </div>
     </>
    )
}
export default Menu;