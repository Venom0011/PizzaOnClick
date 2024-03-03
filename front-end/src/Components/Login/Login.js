import React, { useState } from 'react'
import image from '../../assests/images/animation2.gif'
import './Login.css';
import icon from '../../assests/icons/back.png'
import { NavLink, useNavigate } from 'react-router-dom';
import AuthService from '../../Service/AuthService';
function Login() {
  
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const handleEmail=(e)=>setEmail(e.target.value);
  const navigate=useNavigate();
  const handlePassword=(e)=>setPassword(e.target.value);
  

  const authenticate=(e)=>{
    e.preventDefault();

    const user={email,password};
    AuthService.authenticate(user).then((token)=>{
      localStorage.setItem("token",JSON.stringify(token.data))

      
      if(token.data.token){
        AuthService.getUserByEmail().then((result)=>{
          localStorage.setItem("user",JSON.stringify(result.data));
        if(result.data.role==='CUSTOMER'){
            navigate('/');
        }else if(result.data.role==='ADMIN'){
          navigate('/admin');
        }
        }).catch((err)=>{
          console.log(err);
        })
      }
      
    }).catch((err)=>{
      console.log(err);
      alert("Invalid details");
    })
    
  }
  return(
  <>
 
<NavLink to="/" className='home-nav'>
        <div className="m-4">
          <img src={icon} alt=""  height={20} width={20}/> &nbsp;
          <span className="ml-2">Back to Homepage</span>
        </div>
      </NavLink>
      <div className="form-container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="heading">
              <h2>Login</h2>
            </div>
            <form action="">
              <div className="form-group">
                <label htmlFor="email" className="text-muted ml-4">
                  Email
                  <span style={{ color: "red" }}>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="text"
                    name="email"
                  className="login-from form-control ml-4"
                  id="mail"
                  placeholder="eg. johndoe@gmail.com"
                   value={email}
                   onChange={handleEmail}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="text-muted ml-4">
                  Password
                  <span style={{ color: "red" }}>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="login-from form-control ml-4"
                  id="Name"
                  placeholder="password"
                   value={password}
                   onChange={handlePassword}
                ></input>
              </div>
              <button type="submit" className="login-btn ml-4 w-100 p-2 text-lg"  onClick={authenticate}>
                Login
              </button>
              <div className="ml-4 mt-2">
                <p>
                  New user? Create an Account{" "}
                  <span style={{ color: "blue" }}>
                    <a href="/signup">Sign up</a>
                  </span>
                </p>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img src={image} className="img-signin img-fluid w-75"></img>
          </div>
        </div>
      </div>
  </>
  )
 
}
  
    

export default Login