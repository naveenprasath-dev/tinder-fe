import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { createSocketConnection } from '../utils/socket';
import { useSelector } from 'react-redux';

function Chat() {
    const {targetUserId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const user = useSelector((store) => store.user )
    const userId = user?._id;
    const firstName = user?.firstName;
    useEffect(() => {
        if (!userId) {
            return;
        }
        const socket = createSocketConnection();
        // sending event.
        socket.emit("joinChat", {userId, targetUserId});
        // receiving event.
        socket.on("messageReceived", ({firstName, text}) => {
            setMessages((messages) => [...messages, {firstName, text}]);
        })
        // this will run when the component unmounts.
        return () => {
            socket.disconnect();
        }
    }, [userId, targetUserId]);

    const sendMessage = () => {
        const socket = createSocketConnection();
        socket.emit("sendMessage", {firstName, userId, targetUserId, text: newMessage})
        setNewMessage("");
    }

  return (
    <div className='w-1/2 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col'>
        <h1 className='p-5 border-b border-gray-600'>
            Chat
        </h1>
        <div className='flex-1 overflow-scroll p-5'>
                {/* display messages */}
                {
                    messages.map((message, index) => {
                        // return (
                        //     <div key={index} className={`p-2 my-2 ${message.from === targetUserId ? "bg-green-400" : "bg-green-800"}`}>
                        //         {message.text}
                        //     </div>
                        // )
                        return (
                            <div className="chat chat-start" key={index}>
                                <div className="chat-header">
                                   {message.firstName}
                                    <time className="text-xs opacity-50">2 hours ago</time>
                                </div>
                                <div className="chat-bubble">{message.text}</div>
                                <div className="chat-footer opacity-50">Seen</div>
                            </div>
                        )
                    })
                }
        </div>
        <div className='p-5 border-t border-green-600 flex items-center gap-2'>
           <input className='flex-1 border bg-green-200 text-black rounded p-2'  value={newMessage}
           onChange={(e) => setNewMessage(e.target.value)}>
           </input>
           <button className='btn btn-primary' onClick={sendMessage}>Send</button>
        </div>
    </div>
  )
}

export default Chat