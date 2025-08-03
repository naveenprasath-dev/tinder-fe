import React, { useEffect } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet, useNavigate } from 'react-router';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Navigate } from 'react-router';

function Body() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => (store.user));
  const fetchUser = async () =>{
    try {
      const res =  await axios.get(BASE_URL + "/user/profile/view", {
        withCredentials: true,
       });
       dispatch(addUser(res.data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
    }
  }


  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, []);

  return (
    <>
    <NavBar/>
    {/* this is used for routes 
    * All the componenets are rendered inside here.
    *
    */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Body