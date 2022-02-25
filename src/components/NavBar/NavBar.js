import React from "react";
import './NavBar.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import parlour from "../parlour/parlour";
import tips from "../tips/tips";
import about from "../about/about"
import application from "../application/application"
import login from "../login/login"
import signup from"../signup/signup"
import HomePage from "../homepage/homepage";
import logo from "../images/logo.png"


function NavBar (){
    return (
        <div className="menu">
         
    <nav className="navbar">
      <ul className="signup"> 
      <li>
        <div className="navbar-content">
        <img src={logo} alt="" className="logo" />
        </div>
      </li>
      <li>
        <div className="navbar-content">
          <Link to="/login" className="icons"><i class="zmdi zmdi-sign-in material-icons-sign-in"></i></Link>
        </div>
      </li>
      <li>
        <div className="navbar-content">
          <Link to="/signup" className="icons"><i class="zmdi zmdi-account-add material-icons-account-add"></i></Link>
        </div>
      </li> 
      <li>
        <div className="navbar-content">
          <Link to="/">Home</Link>
        </div>
      </li>
      <li>
        <div className="navbar-content">
          <Link to="/parlour">Parlours</Link>
        </div>
      </li>
      <li>
        <div className="navbar-content">
          <Link to="/application">Application</Link>
        </div>
      </li>
      <li>
        <div className="navbar-content">
          <Link to="/tips">Tips</Link>
        </div>
      </li>
      <li>
        <div className="navbar-content">
          <Link to="/about">About Us</Link>
        </div>
      </li>
      <li>
        <div className="navbar-content">
          <Link to={{pathname:"https://www.facebook.com/Beautyone-103922378734954/"}} className="icons" target="_blank" ><i class="zmdi zmdi-facebook material-icons-facebook" ></i></Link>
        </div>
      </li>
      <li>
        <div className="navbar-content">
          <Link to={{pathname:"https://www.instagram.com/invites/contact/?i=b7npiv9pw8k2&utm_content=mv0706a"}} target="_blank"  className="icons"><i class="zmdi zmdi-instagram material-icons-instagram" ></i></Link>
        </div>
      </li>
      <li>
        <div className="navbar-content">
          <Link to="/about"  className="icons"><i class="zmdi zmdi-twitter material-icons-twitter" ></i></Link>
        </div>
      </li>
      </ul>
    </nav> 
    
        </div>
    );
};
export default NavBar;
