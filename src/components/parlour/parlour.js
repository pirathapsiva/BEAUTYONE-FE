import React from "react";
import "./parlour.css"
import ParImg from "../images/parlour.png";
import Par1 from "../images/Par1.png"
import Par2 from "../images/Par2.png"
import Par4 from "../images/Par4.png"
import Par5 from "../images/Par5.png"
import Par3 from "../images/Par3.png"
import Par6 from "../images/Par6.png"
import Par7 from "../images/Par7.png"
import Par8 from "../images/Par8.png"
import exparlour from "../exparlour/exparlour"
import Footer from "../footer/footer"
import {Link} from "react-router-dom"

function parlour (){
    return (
        <div >
            <section className="parlour-page">
        <ul className="line2"> 
         <li><div className="par"><Link to="/exparlour"><img src={ParImg} alt="" className="Par" /></Link><h2>Hair And Beauty Salon</h2></div></li>
         <li><Link><div className="par"><img src={Par1} alt="" className="Par" /><h2>Koaly Sala</h2></div></Link></li>
         <li><Link><div className="par"><img src={Par2} alt="" className="Par" /><h2>Attraction</h2></div></Link></li>
        </ul>
        <ul className="line2"> 
         <li><Link><div className="par"><img src={Par3} alt="" className="Par" /><h2>Loyala Salon</h2></div></Link></li>
         <li><Link><div className="par"><img src={Par4} alt="" className="Par" /><h2>Gallary Nails Salon</h2></div></Link></li>
         <li><Link><div className="par"><img src={Par5} alt="" className="Par" /><h2>Beauty Salon</h2></div></Link></li>
        </ul>
        <ul className="line2"> 
         <li><Link><div className="par"><img src={Par6} alt="" className="Par" /><h2>Angels Beauty Salon</h2></div></Link></li>
         <li><Link><div className="par"><img src={Par7} alt="" className="Par" /><h2>Tia Makeup And Hair</h2></div></Link></li>
         <li><Link><div className="par"><img src={Par8} alt="" className="Par" /><h2> Amaya Beauty Salon</h2></div></Link></li>
        </ul>
        </section>
       
            <Footer />
        
        </div>
    );
};
export default parlour;