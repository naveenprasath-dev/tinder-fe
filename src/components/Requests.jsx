import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from '../utils/requestSlice';

function Requests() {

  const requests = useSelector((store) => (store.requests));
  const dispatch = useDispatch();
  const [showButtons, setShowButtons] = useState(true);
  const reviewRequest = async(status, _id) => {
    try {
        const review = await axios.post(BASE_URL + "/request/review/" + status +"/" + _id, {}, {withCredentials:true}); 
        // setShowButtons(false);
        dispatch(removeRequest(_id));
    } catch (error) {
        console.log(error);
    }
  }
  const fetchRequests = async () => {
    try {
        const res = await axios.get(BASE_URL + "/user/requests/received", {withCredentials:true});
        dispatch(addRequests(res?.data?.data));
    } catch (error) {
        console.log(error.message);
    }
  }  

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) {
    return ;
}

if (requests.length ===0) {
    return <h1>No connections</h1>
}
  
  return( 
  <div className="text-center my-10 ">
    <h1 className="text-bold text-2xl">Requests</h1>
    {
    requests.map((request) => {
        const {firstName, lastName, about, age, photoUrl} = request.fromUserId;
        return (
            <div key={request._id} className="flex justify-between items-center m-4 p-4  rounded-lg bg-base-300 mx-auto w-2/3 "> 
                <div>
                    <img src={photoUrl} alt=""  className="w-20 h-20 rounded-b-full"/>
                </div>
                <div className="mx-4 text-left">
                    <h2 className="font-bold text-2xl"> {firstName + " " + lastName }</h2>
                    <p> {about}</p>
                    <p> {age}</p>
                </div>
                { showButtons &&
                     <div>
                     <button className="btn btn-secondary mx-2" onClick={() => reviewRequest("rejected", request._id)}>Reject</button>
                     
                     <button className="btn btn-success mx-2" onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                     
                     </div>
                }
               
             

            </div>
        );
    }
    )
    }
  </div>
  );
}

export default Requests