import { Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import store from "../../store/store";
import { useEffect } from "react";
import axios from "axios";
import Conversation from "./Conversation";
import ChatBox from "./ChatBox";
import {io} from "socket.io-client"
import { useRef } from "react";

const Chat = () => {
 
  const token = JSON.parse(localStorage.getItem("token"));

  const [chats, setChats] = useState([]);
  const [currChat, setcurrChat] = useState(null)
  const [onlineUsers, setonlineUsers] = useState([])
  const [sendMessage,setSendMessage]=useState(null)
  const [receiveMessage, setReceiveMessage] = useState(null)
  const socket=useRef()



  useEffect(()=>{
    socket.current=io("http://localhost:8800")
    socket.current.emit("new-user-add",token._id)
    socket.current.on("get-users",(users)=>{
      setonlineUsers(users)
      // console.log("onls",onlineUsers)
    })
//put token||user
  },[])

  
  //send mssg to socket server
  useEffect(()=>{
    if(sendMessage!==null)
    {
      socket.current.emit("send-message",sendMessage)
    }
  },[sendMessage])

  //receive mssg from socket server

  useEffect(()=>{
    socket.current.on("receive-message",(data)=>{
      console.log("data received in parent chat",data)
      setReceiveMessage(data)
    })

  },[])

  const getChats = async (id) => {
    try {
      const res = axios.get(`http://localhost:8080/chats/${id}`).then((res) => {
        console.log(res.data);
        setChats(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getChats(token._id);
  }, []);

  const chechOnlineUsers=(chat)=>{
    const chatMembers=chat.members.find((member)=>member!==token._id)
    const online=onlineUsers.find((user)=>user.userId===chatMembers)
    return online?true:false
  }


  return (
    <Box className="Chat">
      {/* Left side */}

      <div className="Left-side-chat">
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((c) => {
              return (
                <div onClick={()=>setcurrChat(c)} key={c._id}>
                  <Conversation  online={chechOnlineUsers(c)} data={c} user={token._id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right side */}

      <div className="Right-side-chat">
        <div>
            <ChatBox  receiveMessage={receiveMessage} setSendMessage={setSendMessage} chat={currChat} currUser={token._id} />
        </div>
      </div>
    </Box>
  );
};

export default Chat;
