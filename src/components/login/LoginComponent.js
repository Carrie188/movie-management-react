import React, {useState} from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import {useHistory, Link} from 'react-router-dom'
import LoginService from 'services/LoginService'
import PATHS from 'resources/paths';



const LoginComponent = () => {



    const [user, setUser] = useState({email:"", name:"", password:""})
    const [errMsg, setErrMsg] = useState("");
    // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);  
    const { push } = useHistory();


    const handleChange = (e)=>{
        console.log(e.target);
        // get the target
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;
        // set value to the property of the object
        user[fieldName] = fieldValue;
        // print the newPerson data
        console.log(user);
    }

    const handleSubmit = async (e)=>{

       if(user.email == "" || user.password ==""){
          setErrMsg("Email or Password can not be empty!");
        }else{
          // e.preventDefault();
          console.log(user);
          LoginService.login(user).then((response)=>{
              var user = response.data;
              sessionStorage.setItem("user-info", JSON.stringify(user));
              console.log("user data: "+JSON.stringify(user))
              alert("Welcome back "+ user.name);
              push(PATHS.dashboard)
          }).catch((err) => {
              setErrMsg("Oops! "+err.response.data.message);
             
              
            });
        }
       

    }



  return (
    <div className="main-login">
      <div className='form-login'>
        <form>
          
            <h3 className='title-login'>Login Here</h3>
            
              <div className="mb-3">
              <label className='form-label' htmlFor="email">Email</label>
              <input type="email" className='form-control'  id="email" required="required" name="email" onChange={handleChange} placeholder="Email" />
              </div>
              <div className="mb-3">
              <label className='form-label'  htmlFor="password">Password</label>
              <input type="password" className='form-control' id="password" required="required" name="password" onChange={handleChange} placeholder="Password" />
              </div>
              <div className="mb-3">
              <button className="btn btn-primary" type='button' onClick={handleSubmit}>Log In</button>
              </div>
              <p className='err-msg'>{errMsg}</p>

            <div>
              <p ><i>forget password?</i></p>
              <div>
                <Link to="/signup"><p>Sign Up</p></Link>
              </div>
              </div>
           
        </form>
      </div>
    </div>
  )
}

export default LoginComponent