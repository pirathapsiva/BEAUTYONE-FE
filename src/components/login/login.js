import React, {useState}  from "react"
import "./login.css";
import Footer from "../footer/footer";
import Logim from "../images/login.png"
import {login} from "../../services/authService"
const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const Input = ({ name, label, iconClassName, ...rest }) => {
    return (
      // <div className="mb-3">
      //   <label htmlFor={name}>{label}</label>
      //   <input {...rest} name={name} id={name} className="form-control" />
        <div className="formgroup">
                  <label htmlFor={name}>
                  <i className={iconClassName}></i></label>
                    <input {...rest} type="text" id={name} name={name} autoComplete="off" placeholder={label} required/>
                </div>
      // </div>
    );
  };

  const renderInput =(name, label, iconClassName, type = "text") => {
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={handleChange}
        iconClassName={iconClassName}

      />
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handling Submit");

    doSubmit();
  };

  const handleChange = ({ currentTarget: input }) => {

    const newData = { ...data };
    newData[input.name] = input.value;
    setData(newData)
    // this.setState({ data });
  };

  const doSubmit = async () => {
    try {
    window.location = "/dashbord"
     const user = await login(data.email, data.password);
     console.log(user)

    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex)
      }
    }
  };

     return(
       <div>
         <img src={Logim} alt="" className="logim" />
         <section className="login-page">
        <div className="login-content">    
            <div className="login-form">
              <h2 className="login-title">Login</h2>
              <form onSubmit={handleSubmit} className="login-register">
            {renderInput("email", "E-Mail","zmdi zmdi-email material-icons-email")}
            <br/>
            {renderInput("password", "Password","zmdi zmdi-lock material-icons-lock")}

                {/* <div className="formgroup">
                  <label htmlFor="email">
                  <i class="zmdi zmdi-email material-icons-email"></i></label>
                    <input type="text" id="email" name="email" autoComplete="off" placeholder=" E-mail" required/>
                </div>
                <br/>
                <div className="formgroup">
                  <label htmlFor="password">
                  <i class="zmdi zmdi-lock material-icons-lock"></i></label>
                    <input type="password" id="password" name="password" autoComplete="off" placeholder=" Password" required/>
                </div>
                <br/> */}
                <br/>
                
                <div className="buton">
                  <button className="button" value="Login" type="submit">Login</button>
                  </div>    
              </form>
            </div>     
            </div>
           
    </section>  
   
            <Footer/>
             
    </div>
     );
 };
 export  default Login; 