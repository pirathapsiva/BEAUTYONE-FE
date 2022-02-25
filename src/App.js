import React from "react";
import './App.css';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import parlour from "./components/parlour/parlour";
import tips from "./components/tips/tips";
import about from "./components/about/about";
import application from "./components/application/application";
import Login from "./components/login/login";
import signup from "./components/signup/signup";
import logo from "./components/images/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/homepage/homepage"
import ourservices from "./components/ourservices/ourservices"
import Exparlour from "./components/exparlour/exparlour";
import Booking from "./components/booking/booking"
import Appoinment from "./components/appoinment/appoinment"
import Dashboard from "./components/dashboard/dashbord";
import Payment from "./components/payment/payment";
function App  () {
  return (
    <div> 
       <Router>   
      <NavBar />
     <Switch>
      <Route exact path ="/" component={HomePage} />
      <Route  path ="/login" component={Login}/>
      <Route  path ="/signup" component={ signup } />
      <Route  path ="/parlour" component={ parlour } />
      <Route  path ="/tips" component={ tips } />
      <Route  path ="/application" component={ application } />
      <Route  path ="/about" component={ about } />
      <Route path="/exparlour" component={Exparlour} />
      <Route path="/booking" component={Booking} />
      <Route path="/appoinment" component={ Appoinment } />
      <Route path="/dashbord" component={Dashboard}/>
      <Route path="/payment" component={Payment}/>
    </Switch>
  </Router>
  </div>
);
};
export default App;
