import React from "react";
import {Link} from "react-router-dom"
import "./footer.css"
function Footer (){
    return (
        <div className="footer-page">
            <div className="footer-links">
                <ul>
                    <li><Link to="/parlour">Parlours</Link></li>
                    <li><Link to="/application">Application</Link></li>
                    <li><Link to="/parlour">Get Serivices</Link></li>
                    <li><Link to="/tips">Tips</Link></li>
                    <li><Link to="/about">About Us</Link></li>                
                </ul>             
            </div>
             <div className="foot-icon">
                 <ul>
                    <li><Link to={{pathname:"https://www.facebook.com/Beautyone-103922378734954/"}} target="_blank" ><i class="zmdi zmdi-facebook material-icons-facebook"/></Link></li>
                    <li><Link to={{pathname:"https://www.instagram.com/invites/contact/?i=b7npiv9pw8k2&utm_content=mv0706a"}} target="_blank" ><i class="zmdi zmdi-instagram material-icons-instagram" ></i></Link></li>
                    <li><Link to="/about" ><i class="zmdi zmdi-twitter material-icons-twitter" ></i></Link></li>
                </ul>
           </div>
           <div className="footer-privacy">
                <ul>
                    <li><Link to="/">Privacy & Policy </Link></li>
                    <li><Link to="/">Terms & Service</Link></li>      
                </ul>             
           </div>         
        </div>
    );
};
export default Footer;