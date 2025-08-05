import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

function Feed() {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    try {
      if (feed) return 
      const res =  await axios.get(BASE_URL+"/user/feed", {withCredentials: true})
      dispatch(addFeed(res.data));
    } catch (error) {
      console.log(error);
    }
  
  }

  useEffect(() => {
    getFeed();
  }, []);

    if (feed && feed.length ===0) {
      return <div>Feed is empty</div>
    }
    
  return (feed &&  (
    <div className='flex justify-center my-10'>
      <UserCard user={feed[0]}/>
    </div>
  ))
}

export default Feed