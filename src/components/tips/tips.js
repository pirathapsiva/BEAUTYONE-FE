import React  from "react"
import "./tips.css";
import Tips from "../images/tips.png"
import Water from "../images/drink.png"
import Hands from "../images/hands.png"
import Elbow from "../images/elbows.png"
import Legs from "../images/legs.png"
import Massage from "../images/massage.png"
import Sunglass from "../images/sunglass.png"
import Footer from "../footer/footer"
 function tips (){
     return(
         <div className="tips-page">
            <header>
                <h1>Beauty Tips</h1>
            </header>
            <div className="tips-body">
                <img src={Tips} alt="" className=" " />
                <br/><br/>
                <ul>
                    <li>
                        <div className="tips-p">
                        <p>Be sure you drink 8-10 glasses of water in a day to keep your skin well-hydrated. 
                            Drinking water not only helps to eliminate toxins from the body but also make your skin look clear and radiant.
                        </p>
                        </div>
                    </li>
                    
                    <li>
                        <div className="tips-img" >
                            <img src={Water} alt="" />
                        </div>
                    </li>
                </ul>
                <div className="line2">
                <ul>
                    <li>
                        <div className="tips-p1">
                        <p>Soak your nails in olive oil for five minutes. And then sit back and admire your pretty hands.
                        </p>
                        </div>
                    </li>
                    
                    <li>
                        <div className="tips-img1" >
                            <img src={Hands} alt="" />
                        </div>
                    </li>
                </ul>
                </div>
                <ul>
                    <li>
                        <div className="tips-p">
                        <p>Cut an orange in half and rub it on your elbows and knees. Helps soften those rough patches. And it smells good. 
                            (Rinse off the sticky mess when you are done.)
                        </p>
                        </div>
                    </li>
                    <li>
                        <div className="tips-img" >
                            <img src={Elbow} alt="" />
                        </div>
                    </li>
                </ul>
                <div className="line2">
                <ul>
                    <li>
                        <div className="tips-p1">
                        <p>Use coconut oil on your legs as a natural replacement for your shaving cream. 
                        </p>
                        </div>
                    </li>
                    <li>
                        <div className="tips-img1" >
                            <img src={Legs} alt="" />
                        </div>
                    </li>
                </ul>
                </div>
                <ul>
                    <li>
                        <div className="tips-p">
                        <p>Your face is made up of 57 muscles. Is it time for you to deal with them? Simple massage exercises stimulate the facial muscles and offer you the most painless facelift.
                             All you need to do is spend a few minutes a day massaging away!
                        </p>
                        </div>
                    </li>
                    <li>
                        <div className="tips-img" >
                            <img src={Massage} alt="" />
                        </div>
                    </li>
                </ul>
                <div className="line2">
                <ul>
                    <li>
                        <div className="tips-p1">
                        <p>Always wear Sunglasses.In addition to style, they protect your eyes and the area around them, which is particularly sensitive and tends to “break” very easily. 
                            We will excuse you if you forget these at home only on rainy days!
                        </p>
                        </div>
                    </li>
                    <li>
                        <div className="tips-img1" >
                            <img src={Sunglass} alt="" />
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            
                <Footer />
            
         </div>
     )
 }
 export  default tips;