import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import {BASE_URL} from '../utils/constants';
function Login() {
  const [emailId , setEmailId] = useState('');
  // Email!123
  const [password , setPassword] = useState('');
  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const [isLoginForm , setIsLoginForm] = useState(true);


  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Never call a hook inside a function.
  const handleLoginClick = async () => {
    try {
     const res =  await axios.post(BASE_URL+"/login", {
        emailId: emailId,
        password: password
      },{withCredentials: true});
      console.log(res.data);
      dispatch(addUser(res.data));
      return navigate("/feed");
    } catch (error) {
      setError(error?.response?.data?.message || "something went wrong");
      console.log(error?.response?.data?.message);
      // console.log(error?.response?.data);
    }
   
  }

  
  const handleSignUp = async () => {
    try {
      const res =  await axios.post(BASE_URL+"/signup", {
        firstName: firstName,
        lastName: lastName,
        emailId: emailId,
        password: password
      },{withCredentials: true});
      dispatch(addUser(res?.data?.data));
      return navigate("/profile");
    } catch (error) {
      console.log("error", error);
    }
  }
  
  return (
    <div className='flex justify-center my-10'>
      <div className="card card-border bg-base-300 w-96 ">
        <div className="card-body">
          <h2 className="card-title">{isLoginForm ? "Login" : "SignUp"}</h2>
          <div>
          </div>
          <div className="card-actions  justify-center">
            <div>
              {!isLoginForm &&
               <> 
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Enter First Name</legend>
                  <input type="text" value={firstName} className="input" placeholder="" 
                  
                  onChange={(e)=>setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Enter Last Name</legend>
                  <input type="text" value={lastName} className="input" placeholder="" 
                  
                  onChange={(e)=>setLastName(e.target.value)}
                  />
                </fieldset>
              </>
              }
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
          {error && <p className='text-red-500 text-center'>{error}</p>}
          <div className='flex justify-center'>
                <button className="btn btn-primary" onClick={isLoginForm ? handleLoginClick : handleSignUp}>{isLoginForm? "Login" : "SignUp"}  </button>
            </div>
            <p className='text-red-500 text-center cursor-pointer'
            onClick={() =>setIsLoginForm((value) => !value)}
            >
              {isLoginForm ? "New User ? Sign Up here" : "Existing User ? Login here" }
            </p>
        </div>  
    </div>
   </div>
  )
}

export default Login