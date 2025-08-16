import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { Link } from "react-router";

function Connections() {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const res  = await axios.get(BASE_URL + "/user/requests/connections", {withCredentials:true});
      dispatch(addConnections(res?.data?.data));
    } catch (error) {
        console.log("error", error);
    }
  };

useEffect(() => {
    fetchConnections();
}, []);


if (!connections) {
    return ;
}

if (connections.length ===0) {
    return <h1>No connections</h1>
}
  
  return( 
  <div className="text-center my-10 ">
    <h1 className="text-bold text-2xl">Connections</h1>
    {
    connections.map((connection) => {
        const {_id, firstName, lastName, about, age, photoUrl} = connection;
        return (
            <div key={connection._id} className="flex  m-4 p-4  rounded-lg bg-base-300 mx-auto w-1/2 "> 
                <div>
                    <img src={photoUrl} alt=""  className="w-20 h-20 rounded-b-full object-cover"/>
                </div>
                <div className="mx-4 text-left">
                    <h2 className="font-bold text-2xl"> {firstName + " " + lastName }</h2>
                    <p> {about}</p>
                    <p> {age}</p>
                    <Link to={'chat/' + _id}>
                     <button className="btn btn-primary">chat</button>

                    </Link>
                </div>
            </div>
        );
    }
    )
    }
  </div>
  );
}

export default Connections;
