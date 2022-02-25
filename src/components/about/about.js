import React from "react";
import "./about.css"
import About from "../images/about.png"
import pirathap from "../images/pirathap.png"
import vitthiya from "../images/vitthiya.png"
import kruthiga from "../images/kruthiga.png"
import me from  "../images/me.png"
import {Link} from "react-router-dom"
import Footer from "../footer/footer";

function about (){
    return (
        <div className="about-page">
            <img src={About} className="about-img" />
            <br/><br/>
            <h1>Team Members</h1>
            <br/><br/>
            <div className="about-us">            
                <ul>
                    <li>
                        <div className="photo"> 
                        <img src={kruthiga} /></div>
                    </li>
        
                    <li>
                        <div className="pr">
                        <p>As a woman, I became aware of how tough it is for other women to keep their attractiveness and decided to start this service.
                         What factors should I consider before selecting a beauty salon? Is it important for me to appear stunning at my wedding?
                          Due to a shortage of time, how can I concentrate on beauty? Should we go to beauty salons and wait too long? Women are more likely to ask these types of queries.
                           Beautyone is the answer. So take advantage of it.
                           <br/>Miss.Kruthiga Suthakaran
                           <br/>kruthiga19960731@gmail.com
                        </p>
                        </div>
                    </li>
                </ul>
                <br/><br/><br/>
                <ul>
                    <li>
                        <div className="photo"> 
                        <img src={vitthiya} /></div>
                    </li>
                    <li>
                        <div className="pr">
                        <p>This beautyone is ideal for those who are short on time or bored. It is a website that saves time, assists women in improving their appearance, and prevents data smuggling and misuse of beauty salons through its use.
                           <br/>Miss.Vitthiya Niththiyananthan
                           <br/>viththiniththi@gmail.com 
                        </p>
                        </div>
                    </li>
                </ul>
                <br/><br/>
                <ul>
                    <li>
                        <div className="photo"> 
                        <img src={pirathap} /></div>
                    </li>
                    <li>
                        <div className="pr">
                        <p>This website, in my opinion, is extremely beneficial to any lady who values her appearance. There is no doubt that this will be an excellent opportunity for users to learn about the greatest in beauty,
                             allowing ladies to save their time.
                             And we are firm believers in the race that can further enhance their attractiveness by visiting beauty centers located throughout the country.
                           <br/>Mr.Sivanthan Pirathap
                           <br/>sspirathap26370@gmail.com 
                        </p>
                        </div>
                    </li>
                </ul>
                <br/><br/>
                <ul>
                    <li>
                        <div className="photo"> 
                        <img src={me} /></div>
                    </li>
                    <li>
                        <div className="pr">
                        <p>They will argue that someone who works intelligently is superior to someone who works hard. The purpose of this website is to make that assertion a reality. As humans, we are averse to making everything high-quality while yet being simple. This webpage was built to suit those requirements. 
                            We hope you like the extension and read the instructions, as it is especially beneficial for ladies.
                           <br/>Mr.Pathmakumar Praveen
                           <br/>kalep20096@gmail.com
                        </p>
                        </div>
                    </li>
                </ul>
            </div>
            <br/><br/>
            <div className="contact">
                <ul>
                    <li>
                    <li><Link to={{pathname:"https://www.facebook.com/Beautyone-103922378734954/"}} target="_blank" ><i class="zmdi zmdi-facebook material-icons-facebook"/></Link></li>
                    <li><Link to={{pathname:"https://www.instagram.com/invites/contact/?i=b7npiv9pw8k2&utm_content=mv0706a"}} target="_blank" ><i class="zmdi zmdi-instagram material-icons-instagram" ></i></Link></li>
                    <li><Link to="/about" ><i class="zmdi zmdi-twitter material-icons-twitter" ></i></Link></li>
                    </li>
                </ul>
            </div>
            <br/><br/>
            <div class="p-n">
                <ul>
                    <li>
                        <i class="zmdi zmdi-phone-in-talk material-icons-phone-in-talk"> </i>             
                            076-2625634                        
                    </li>
                    <li>
                    <i class="zmdi zmdi-email material-icons-email"></i>
                       beautyone21k@gmail.com
                    </li>
                    </ul>
            </div>
            
                <Footer />
          
            
        </div>
    )
}
export default about;