import React from "react";
import "./appoinment.css"
import Footer from "../footer/footer"

function Appoinment (){
    return(
        <div>
        <div className="appoinmment-page">
            <div className="appoinmment-content">    
           <div className="appoinmment-form">
             <h2 className="appoinmment-title">Appoinmment</h2>
             <form className="appoinmment-register" id="register-form">  
             <div className="appoinmment-group">
             <label htmlFor="name">
                  <i class="zmdi zmdi-account material-icons-name"></i></label>
                    <input type="text" id="name" name="name" autoComplete="off" placeholder="Name" required/>
                    </div>
                    <br/>
                    <div className="appoinmment-group" >
                  <label htmlFor="phoneno">
                  <i class="zmdi zmdi-phone-in-talk material-icons-phone-in-talk"></i></label>
                    <input type="text" id="phoneno" name="phoneno" autoComplete="off" placeholder=" Phone Number" required title="Please Enter Your Phone Number "/>
                </div>
                <br/>
             <div className="appoinmment-group">
                 <label htmlFor="add">
                 <i class="zmdi zmdi-cake material-icons-cake"></i></label>
                   <input type="text" id="name" name="name" autoComplete="off" placeholder="Package Type" required/>
               </div>           
               <br/>
               <div className="appoinmment-group">
                 <label htmlFor="add">
                 <i class="zmdi zmdi-pin-drop material-icons-pin-drop"></i></label>
                   <input type="date" id="date" name="date" autoComplete="off" placeholder=" Date" required/>
               </div>
               <br/>     
               <div className="appoinmment-group">
                 <label htmlFor="add">
                 <i class="zmdi zmdi-time"></i></label>
                   <input type="time" id="time" name="time" autoComplete="off" placeholder="Time" required/>
               </div>
               <br/>     
               <div className="appoinmment-group">
                 <label htmlFor="add">
                 <i class="zmdi zmdi-phone"></i></label>
                   <input type="pn" id="pn" name="pn" autoComplete="pn" placeholder="Phone Number" required/>
               </div>
               <br/>
               <div className="buton">
                 <button className="submit" value="Apply" type="button" className="button">Book</button>
                 </div>
               <br/>   
               <br/>               
             </form>
           </div>   
        </div>     
        </div>
        <Footer />
        </div>
    );
};
export default Appoinment;