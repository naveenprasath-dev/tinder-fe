import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import {BASE_URL} from '../utils/constants';
function Login() {
  const [emailId , setEmailId] = useState('feed-API@gmail.com');
  const [password , setPassword] = useState('Email!123');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Never call a hook inside a function.
  const handleLoginClick = async () => {
    try {
     const res =  await axios.post(BASE_URL+"/login", {
        emailId: emailId,
        password: password
      },{withCredentials: true});

      dispatch(addUser(res.data));
      return navigate("/");
    } catch (error) {
      console.log(error);
    }
   
  }
  
  return (
    <div className='flex justify-center my-10'>
      <div className="card card-border bg-base-300 w-96 ">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
          </div>
          <div className="card-actions  justify-center">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Enter email Id</legend>
                <input type="text" value={emailId} className="input" placeholder="" 
                
                onChange={(e)=>setEmailId(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Enter password</legend>
                <input type="text" value={password} className="input" placeholder="" 
                onChange={(e)=>setPassword(e.target.value)}/>
              </fieldset>
            </div>
           
          </div>
          <div className='flex justify-center'>
                <button className="btn btn-primary" onClick={handleLoginClick}>Login</button>
            </div>
        </div>  
    </div>
   </div>
  )
}

export default Login