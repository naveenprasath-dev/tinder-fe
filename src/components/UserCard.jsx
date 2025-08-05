import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

function UserCard({user}) {
    const {_id, firstName, lastName, about, age, gender, photoUrl} = user;
    const dispatch = useDispatch();
    const handleSendRequest = async (status, userId) => {
      try {
          const res = await axios.post(BASE_URL+ "/request/send/" + status + "/" + userId, {}, {withCredentials: true});
          dispatch(removeUserFromFeed(userId));
      } catch (error) {
        console.log(error);
      }
    }
  
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        src={photoUrl}
        alt="photo" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{firstName + " " + lastName}</h2>
      <p>{age && gender && age + " " + gender}</p>
      <p>{about}</p>
      <div className="flex card-actions justify-center my-4">
        <button className="btn bg-red-500" onClick={() => handleSendRequest('interested', _id)}>Ignore</button>
        <button className="btn bg-green-500" onClick={() => handleSendRequest('ignored', _id)}>Interested</button>
      </div>
    </div>
  </div>
  )
}

export default UserCard