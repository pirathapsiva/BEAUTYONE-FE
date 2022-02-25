import React  from "react"
import "./homepage.css";
import home from "../images/home.png"
import ourservices from "../ourservices/ourservices"
import {Link} from "react-router-dom"
import salon from "../images/Salon.png"
import bridel from "../images/bridel.png"
import Footer from "../footer/footer"
import pirathap from "../images/pirathap.png"
import vitthiya from "../images/vitthiya.png"
import kruthiga from "../images/kruthiga.png"
import praveen from  "../images/me.png"
import intro2 from "../images/intro2.png"
import Video from "../images/video.mp4"
 function HomePage (){
     return(
        <div className="home-page">
            <center>
            <img src={home} alt="" className="home" /> 
            <div className="image-text">
                <h1>"Good makeup reflects your story and your <br/> spirit"</h1>
                <h2>CHOOSE YOURS..</h2>
            </div>  
            <div className="text2">
                <h1>
                Our Beauty ONE makes it easier to find a salon that suits you.
                </h1>
            </div >
            <br/>
            <div >
               <Link to="/ourservices"><input type="button" value="Our Services" className="our-services-but"></input></Link>
            </div>
            <br/>
            <div  className="ser">
             <ul>
                <li><div><img src={salon} alt="" className="salon"/> 
                    <h1>Make an appointment with a parlour <br/>for your works.</h1><br/>
                       <div><Link to="/parlour"><input type="button" value="Get Your Appoinments"  className="appo"/></Link></div>
                         </div></li>
               <li><div><img src={bridel} alt="" className="salon"/>
                    <h1>Artists can be hired <br/>for your events.</h1><br/>
                       <div><Link to="/parlour"><input type="button" value="Hire An Artist"  className="appo"/></Link></div>
                         </div></li>         
             </ul>
            </div>
            </center>
            <br/>
            <div className="intro">
                <h1>Introducing..</h1>
                <br/>
                <ul>
                <li>      <div clasName="video">
                   <video width="500" height="320" controls={false} loop loop={true} autoPlay={true} muted={true}>
                       <source src={Video} type="video/mp4"/>
                   </video>
            </div>  </li>
               <li><p>For everyone, beauty is a must-have. Women, in particular, need to be aware of this. However, the main issue is that they do not have enough time to highlight their beauty. Beautyone is the answer. This is the simplest action you can take.
                On our website, you may learn everything there is to know about beauty salons, select your preferred salon, and schedule an appointment with one of our beauty salon specialists. We hope you like the enhanced service provided by this website.
                <br/><br/><Link to={{pathname:"https://beautyone2021.blogspot.com/2021/10/beauty-one.html"}} target="_blank"><input type="button" value="Read More.."  className="our-services-button"/></Link></p></li> 
                    <br/>
                    
                </ul>
                <div></div>
            </div>
            <br/><br/>   
            <center>
            <div className="team-div">
                <h1>Our Pillers</h1>
                <br/>
                <ul>
                    <li>
                        <div className="mem">
                        <img src ={kruthiga} alt="" className="team"/>
                        <h3>Miss.Kruthiga <br/>Suthakaran</h3>
                        </div>
                    </li>
                    <li>
                        <div  className="mem">
                        <img src ={vitthiya} alt="" className="team"/>
                        <h3>Miss.Vitthiya <br/>Niththiyananthan</h3>
                        </div>
                    </li>
                    <li>
                        <div  className="mem">
                        <img src ={pirathap} alt="" className="team"/>
                        <h3>Mr.Sivananthan <br/>Pirathap</h3>
                        </div>
                    </li>
                    <li>
                        <div  className="mem">
                        <img src ={praveen} alt="" className="team"/>
                        <h3>Mr.Pathmakumar <br/>Praveen</h3>
                        </div>
                    </li>
                </ul>
            </div>
            <br/> 
            <div>
                
            </div>
            </center>
            <Footer/>
        </div>
     );  
 };
 export  default HomePage;