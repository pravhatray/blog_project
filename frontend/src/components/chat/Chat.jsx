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

const Chat = () => {
  // const user = useSelector((store) => store.auth);
  // console.log("user",user)

  const token = JSON.parse(localStorage.getItem("token"));
  // console.log("chattoken", token._id);

  const [chats, setChats] = useState([]);
  const [currChat, setcurrChat] = useState(null)

  

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
                  <Conversation data={c} user={token._id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right side */}

      <div className="Right-side-chat">
        <div>
            <ChatBox chat={currChat} currUser={token._id} />
        </div>
      </div>
    </Box>
  );
};

export default Chat;
