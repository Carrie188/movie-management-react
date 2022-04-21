import React from 'react'
import {useState} from 'react' 
import { Link, useHistory } from "react-router-dom";
import PATHS from 'resources/paths';
import SignupService from 'services/SignupService';

const SingUpComponent = () => {


    const [user, setUser] = useState({email:"", password:"", type:""})
    const [errMsg, setErrMsg] = useState("");
    const {push} = useHistory();
  
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

    const handleCheckBox = (e)=>{
      console.log(e.target);
      console.log(e.target.checked);
      // get the target
      const fieldName = e.target.getAttribute('name');
      const fieldValue = e.target.value;
      if(e.target.checked){
        // set value to the property of the object
        user[fieldName] = fieldValue;
      }else{
        user[fieldName] = "";
      }
      
      // print the newPerson data
      console.log(user);
    }
  
    const handleSubmit = ()=>{
        console.log(user);
        
        SignupService.register(user)
        .then((response)=>{
          var newUser = response.data;
          console.log(newUser);
          sessionStorage.setItem("user-info", JSON.stringify(newUser));
          alert("Welcome new friend: "+ user.name);
          // navigate to main page when registering successfullys
          push(PATHS.dashboard);
        })
        .catch((err)=>{
            setErrMsg(err.response.data.message);
            console.log(err.response.data.message);
         
        });
    }


  return (
    <div className='main-login'>
      <div className='form-login'>
        <form>
            <h3 className='title-login'>Sign Up</h3>
            
            <div className="mb-3">
            <label htmlFor="username" className='form-label'>Username</label>
            <input type="text" className='form-control' placeholder="Username" required id="name" name='name' onChange={handleChange}/>
            </div>
            <div className="mb-3">
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email"  id="email" required name="email" className='form-control' onChange={handleChange} placeholder="Email" />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password"  id="password" required name="password" className='form-control' onChange={handleChange} placeholder="Password" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="type" name='type' onClick={handleCheckBox} value="admin"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Admin Account?</label>
            </div>
     
            <button type='button' className='btn btn-primary' onClick={handleSubmit}>Sign Up</button>
            <p id='errMsg' className='err-msg'>{errMsg}</p>
            <div>
                <Link to="/login"><p>Login</p> </Link>
            </div>
           
            
            
           
        </form>
        </div>
    </div>
  )
}

export default SingUpComponent