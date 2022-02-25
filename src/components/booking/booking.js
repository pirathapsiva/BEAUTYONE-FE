import React from "react";
import "./booking.css"
import Footer from "../footer/footer"
import {Link} from "react-router-dom"
function Booking() {
  return (
    <div>
      <div className="booking-page">
        <div className="booking-content">
          <div className="booking-form">
            <h2 className="booking-title">Booking</h2>
            <form className="booking-register" id="register-form">
              <div className="booking-group">
                <label htmlFor="pname">
                  <i class="zmdi zmdi-account material-icons-name"></i></label>
                <input type="text" id="pname" name="pname" autoComplete="off" placeholder="Your Name" required title="Please Enter Your Name " />
              </div>
              <br />
              <div className="booking-group" >
                <label htmlFor="phoneno">
                  <i class="zmdi zmdi-phone-in-talk material-icons-phone-in-talk"></i></label>
                <input type="text" id="phoneno" name="phoneno" autoComplete="off" placeholder=" Phone Number" required title="Please Enter Your Phone Number " />
              </div>
              <br />
              <div className="booking-group">
                <label htmlFor="add">
                  <i class="zmdi zmdi-cake material-icons-cake"></i></label>
                <input type="text" id="name" name="name" autoComplete="off" placeholder="Function Name" required title="Please Function Type Name " />
              </div>
              <br />
              <div className="booking-group">
                <label htmlFor="add">
                  <i class="zmdi zmdi-pin-drop material-icons-pin-drop"></i></label>
                <input type="date" id="date" name="date" autoComplete="off" placeholder=" Date" required title="Please Enter function Date " />
              </div>
              <br />
              <div className="booking-group">
                <label htmlFor="add">
                  <i class="zmdi zmdi-time"></i></label>
                <input type="time" id="time" name="time" autoComplete="off" placeholder="Time" required title="Please Enter Function Time" />
              </div>

              <br />
              <div className="buton">
          
                <Link to="/payment"> <button className="submit" value="Apply" type="button" className="button"  >Book</button> </Link>

              </div>
              <br />

              <br />
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
export default Booking;